// 📂 src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  role?: "student" | "faculty";
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  // ✅ Get token based on role
  const token =
    role === "faculty"
      ? localStorage.getItem("faculty_token")
      : role === "student"
      ? localStorage.getItem("student_token")
      : localStorage.getItem("faculty_token") || localStorage.getItem("student_token");

  // ✅ Get user object based on role
  const user =
    role === "faculty"
      ? JSON.parse(localStorage.getItem("faculty_user") || "null")
      : role === "student"
      ? JSON.parse(localStorage.getItem("student_user") || "null")
      : JSON.parse(localStorage.getItem("faculty_user") || "null") ||
        JSON.parse(localStorage.getItem("student_user") || "null");

  // 1️⃣ If no token → redirect to role-specific login
  if (!token) {
    if (role === "faculty") return <Navigate to="/faculty/login" replace />;
    if (role === "student") return <Navigate to="/student/login" replace />;
    return <Navigate to="/" replace />;
  }

  // 2️⃣ If role is defined but user role doesn't match → redirect home
  if (role && user?.role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // 3️⃣ Otherwise render the children (dashboard or protected page)
  return children;
};

export default ProtectedRoute;
