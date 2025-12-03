// src/components/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        
        {/* Topbar */}
        <Topbar />

        {/* Page content (this changes based on route) */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
