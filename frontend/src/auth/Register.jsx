import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);

      if (res.data.success) {
        alert("Account created! You can now login.");
        navigate("/login");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed.");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>

        <h1 className="text-2xl font-semibold mb-4">Register</h1>

        <input
          name="username"
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 border rounded"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
          value={form.password}
          onChange={handleChange}
          required
        />

        {/* You can hide or lock this later */}
        <select
          name="role"
          className="w-full p-2 mb-3 border rounded"
          value={form.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
