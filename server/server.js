// C:\Aman Raj\EduSangrah\server\server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ------------------ Routes ------------------
const authRoutes = require("./src/routes/auth");       // Auth routes
const facultyRoutes = require("./src/routes/faculty"); // Faculty routes

app.use("/api/auth", authRoutes);
app.use("/api/faculty", facultyRoutes);

// ------------------ DB Connection ------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("Mongo error:", err));
