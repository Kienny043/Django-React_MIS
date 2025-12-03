import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Home, ClipboardList, Calendar, Bell } from "lucide-react";

export default function Sidebar() {
  const { user } = useAuth();

  // LINKS per role
  const links = {
    admin: [
      { to: "/", label: "Dashboard", icon: Home },
      { to: "/manage-requests", label: "Requests", icon: ClipboardList },
      { to: "/calendar", label: "Calendar", icon: Calendar },
      { to: "/notifications", label: "Notifications", icon: Bell },
    ],
    staff: [
      { to: "/staff", label: "Dashboard", icon: Home },
      { to: "/my-tasks", label: "My Tasks", icon: ClipboardList },
      { to: "/calendar", label: "Calendar", icon: Calendar },
      { to: "/notifications", label: "Notifications", icon: Bell },
    ],
    user: [
      { to: "/user", label: "Dashboard", icon: Home },
      { to: "/submit-request", label: "Submit Request", icon: ClipboardList },
      { to: "/my-requests", label: "My Requests", icon: ClipboardList },
      { to: "/notifications", label: "Notifications", icon: Bell },
    ],
  };

  const roleLinks = links[user?.role] || [];

  return (
    <aside className="w-64 bg-white shadow-lg h-screen p-4 fixed">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">G2-MIS</h1>

      <nav className="flex flex-col gap-2">
        {roleLinks.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
