// 📂 C:\Aman Raj\EduSangrah\src\App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// --- Student Pages ---
import StudentRegister from "./pages/student/StudentRegister";
import StudentLogin from "./pages/student/StudentLogin";
import StudentDashboard from "./pages/student/StudentDashboard";

// --- Faculty Pages ---
import FacultyRegister from "./pages/faculty/FacultyRegister";
import FacultyLogin from "./pages/faculty/FacultyLogin";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import CertificateValidation from "./pages/faculty/CertificateValidation";
import DocumentVerification from "./pages/faculty/DocumentVerification";
// import FacultyCourses from "./pages/faculty/FacultyCourses";
// import FacultyStudents from "./pages/faculty/FacultyStudents";
// import FacultySettings from "./pages/faculty/FacultySettings";

import FacultyLayout from "./layouts/FacultyLayout";

// --- Protected Route ---
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />

          {/* Student Routes */}
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route
            path="/student/dashboard/*"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          {/* Faculty Routes */}
          <Route path="/faculty/register" element={<FacultyRegister />} />
          <Route path="/faculty/login" element={<FacultyLogin />} />

          {/* Faculty Dashboard with Layout */}
          <Route
            path="/faculty/dashboard/*"
            element={
              <ProtectedRoute role="faculty">
                <FacultyLayout />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes */}
            <Route index element={<FacultyDashboard />} />
            <Route path="home" element={<FacultyDashboard />} />
            <Route path="certificate-validation" element={<CertificateValidation />} />
            <Route path="document-verification" element={<DocumentVerification />} />

            {/* Future routes (uncomment when ready) */}
            {/* <Route path="courses" element={<FacultyCourses />} /> */}
            {/* <Route path="students" element={<FacultyStudents />} /> */}
            {/* <Route path="settings" element={<FacultySettings />} /> */}
          </Route>

          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
