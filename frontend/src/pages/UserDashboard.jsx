import { useAuth } from "../context/AuthContext";

export default function UserDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">User Dashboard</h1>
      <p className="text-gray-600 mb-4">Welcome, {user?.username}</p>

      <div className="mt-6">
        <p className="font-semibold">Your Actions</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Create Maintenance Request</li>
          <li>Track Request Status</li>
          <li>View Request History</li>
        </ul>
      </div>

      <button
        onClick={logout}
        className="mt-8 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
