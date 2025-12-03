import { useAuth } from "../context/AuthContext";
import { LogOut } from "lucide-react";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold text-gray-700">
        {user?.role?.toUpperCase()} PANEL
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-gray-700">{user?.username}</span>

        <button
          onClick={logout}
          className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}
