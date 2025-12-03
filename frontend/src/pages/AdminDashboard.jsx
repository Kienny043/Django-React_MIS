import { useAuth } from "";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-gray-600 mb-4">Welcome, {user?.username}</p>

      <div className="mt-6">
        <p className="font-semibold">Admin Tools</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Manage Users</li>
          <li>View System Logs</li>
          <li>Update Announcements</li>
          <li>Manage Maintenance Requests</li>
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
