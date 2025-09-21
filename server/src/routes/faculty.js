// ------------------ IMPORTS ------------------
const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const pdf = require("pdf-poppler");
const Jimp = require("jimp");
const { BrowserQRCodeReader } = require("@sec-ant/zxing-wasm"); // ✅ ZXing WASM

// Models & Middleware
const Faculty = require("../models/Faculty");
const auth = require("../middleware/auth");

// ------------------ SETUP ------------------
const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ============================================================
// 📌 FACULTY REGISTRATION
// ============================================================
router.post("/register", async (req, res) => {
  const { username, email, password, department } = req.body;

  if (!username || !email || !password || !department)
    return res.status(400).json({ success: false, msg: "All fields are required" });

  try {
    const existing = await Faculty.findOne({ email });
    if (existing)
      return res.status(400).json({ success: false, msg: "Email already exists" });

    const faculty = new Faculty({ username, email, password, department });
    await faculty.save();

    res.status(201).json({ success: true, msg: "Faculty registered successfully" });
  } catch (err) {
    console.error("REGISTER ERROR:", err.message);
    res.status(500).json({ success: false, msg: "Server error during registration" });
  }
});

// ============================================================
// 📌 FACULTY LOGIN
// ============================================================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ success: false, msg: "All fields are required" });

  try {
    const faculty = await Faculty.findOne({ email });
    if (!faculty)
      return res.status(400).json({ success: false, msg: "Invalid credentials" });

    const isMatch = await faculty.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ success: false, msg: "Invalid credentials" });

    const token = jwt.sign(
      { id: faculty._id, role: "faculty", username: faculty.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token,
      faculty: {
        id: faculty._id,
        username: faculty.username,
        email: faculty.email,
        department: faculty.department,
      },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err.message);
    res.status(500).json({ success: false, msg: "Server error during login" });
  }
});

// ============================================================
// 📌 CERTIFICATE VALIDATION
// ============================================================
router.post("/validate-certificate", auth, async (req, res) => {
  const { data } = req.body;

  if (!data)
    return res.json({
      success: false,
      msg: "No QR data provided",
      data: { certificateId: null, link: null },
    });

  try {
    const certificateId = data.split("/").pop() || data;
    const link = data;

    res.json({
      success: true,
      msg: "Certificate is VALID ✅",
      data: { certificateId, link, validatedBy: req.user.username },
    });
  } catch (err) {
    console.error("CERTIFICATE VALIDATION ERROR:", err.message);
    res.json({
      success: false,
      msg: "Error validating certificate ❌",
      data: { certificateId: null, link: data },
    });
  }
});

// ============================================================
// 📌 DOCUMENT VERIFICATION (PDF → PNG → ZXing Decode)
// ============================================================

//  Decode QR using ZXing WASM
async function decodeWithZXing(imgPath) {
  const reader = new BrowserQRCodeReader();
  const image = await Jimp.read(imgPath);

  // Preprocess for better detection
  image.resize(image.bitmap.width * 2, image.bitmap.height * 2).grayscale();

  // Convert Jimp bitmap to Uint8ClampedArray
  const buffer = new Uint8ClampedArray(image.bitmap.width * image.bitmap.height * 4);
  for (let i = 0; i < image.bitmap.data.length; i++) {
    buffer[i] = image.bitmap.data[i];
  }

  try {
    const result = await reader.decodeBuffer(
      buffer,
      image.bitmap.width,
      image.bitmap.height,
      "RGBA" // ✅ Jimp data is RGBA
    );
    return result?.text || null;
  } catch (err) {
    return null;
  }
}

// 🔹 Verify Document Route
router.post("/verify-document", auth, upload.single("document"), async (req, res) => {
  if (!req.file)
    return res.status(400).json({ success: false, msg: "No document uploaded" });

  const filePath = req.file.path;
  const ext = path.extname(req.file.originalname).toLowerCase();
  let imageFiles = [];

  try {
    // ------------------ PDF → HIGH RES PNG ------------------
    if (ext === ".pdf") {
      const opts = {
        format: "png",
        out_dir: "uploads",
        out_prefix: path.basename(filePath, ext),
        dpi: 500, // high DPI for QR clarity
      };
      await pdf.convert(filePath, opts);

      imageFiles = fs.readdirSync(opts.out_dir)
        .filter(f => f.startsWith(opts.out_prefix) && f.endsWith(".png"))
        .map(f => path.join(opts.out_dir, f));
    } else {
      imageFiles = [filePath];
    }

    // ------------------ QR CODE DETECTION ------------------
    let qrResult = null;
    for (const imgPath of imageFiles) {
      qrResult = await decodeWithZXing(imgPath);
      if (qrResult) break;
    }

    if (qrResult) {
      const certificateId = qrResult.split("/").pop() || qrResult;
      return res.json({
        success: true,
        msg: "✅ QR Code detected and certificate validated",
        data: {
          certificateId,
          link: qrResult,
          validatedBy: req.user.username,
          parsedQr: { raw: qrResult },
        },
      });
    }

    // ❌ No QR found
    return res.json({
      success: false,
      msg: "ℹ️ Verification completed, but no QR code detected",
      data: {
        parsedQr: null,
        validatedBy: req.user.username,
      },
    });
  } catch (err) {
    console.error("VERIFY DOCUMENT ERROR:", err);
    return res.status(500).json({ success: false, msg: "Server error during verification" });
  } finally {
    // Cleanup temp files
    fs.existsSync(filePath) && fs.unlink(filePath, () => {});
    imageFiles.forEach(img => fs.existsSync(img) && fs.unlink(img, () => {}));
  }
});

module.exports = router;
