import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface Course {
  id: number;
  name: string;
  status: string;
  completionDate: string;
}

const courses: Course[] = [
  { id: 1, name: "React Basics", status: "Completed", completionDate: "2025-09-20" },
  { id: 2, name: "Advanced JavaScript", status: "Completed", completionDate: "2025-09-18" },
  { id: 3, name: "Node.js Backend", status: "In Progress", completionDate: "-" },
  { id: 4, name: "CSS & Tailwind", status: "Completed", completionDate: "2025-09-15" },
  { id: 5, name: "Database Design", status: "In Progress", completionDate: "-" },
];

const stats = [
  { title: "Total Courses", value: 12, bg: "bg-gray-100" },
  { title: "Certificates", value: 5, bg: "bg-gray-100" },
  { title: "Ongoing Projects", value: 3, bg: "bg-gray-100" },
  { title: "Upcoming Events", value: 2, bg: "bg-gray-100" },
];

const actions = [
  "My Records",
  "Achievements & Certificates",
  "Internships & Projects",
  "My Progress",
  "Digital Portfolio",
  "Events & Deadlines",
  "Announcements",
  "Settings",
];

const menuItems = [
  "Dashboard Overview",
  "My Records",
  "Achievements & Certificates",
  "Internships & Projects",
  "My Progress",
  "Digital Portfolio",
  "Events & Deadlines",
  "Announcements",
  "Settings",
];

const StudentDashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard Overview");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-tr-3xl rounded-br-3xl shadow-md p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Student Portal</h1>
        <nav className="flex flex-col space-y-2 flex-1">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`w-full px-4 py-3 rounded-lg text-left transition-all ${
                activeMenu === item
                  ? "bg-blue-100 font-semibold text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <Button
          onClick={() => alert("Logout")}
          className="w-full mt-6 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white"
        >
          Logout
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back, Student 👋</h2>
            <p className="text-gray-600">Check your stats and recent activities below</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            Browse Courses
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className={`flex flex-col items-center p-6 rounded-2xl shadow ${stat.bg}`}
            >
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6 overflow-x-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Course</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Completion Date</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50 text-gray-700">
                  <td className="p-3 border">{course.name}</td>
                  <td className="p-3 border">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        course.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td className="p-3 border">{course.completionDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {actions.map((action) => (
            <button
              key={action}
              className="flex items-center justify-center p-4 rounded-2xl shadow hover:scale-105 transform transition bg-white text-gray-700"
            >
              {action}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
