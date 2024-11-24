import React, { useState } from "react";
import api from "../api/api";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    phone: "",
    address: "",
    residentSince: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // For loading state
  const [success, setSuccess] = useState(false); // For success message
  const [error, setError] = useState(""); // For error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const response = await api.post("/signup", formData);
      setSuccess(true);
      setFormData({
        FullName: "",
        email: "",
        phone: "",
        address: "",
        residentSince: "",
        password: "",
      }); // Reset form data
    } catch (error) {
      console.error(error);
      setError("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {success && (
        <p className="text-green-500 mb-4">Registration done successfully!</p>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="space-y-4" onSubmit={handleSignup}>
        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          value={formData.FullName} // Bind value to formData
          onChange={handleChange}
          className="w-full text-white p-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email} // Bind value to formData
          onChange={handleChange}
          className="w-full text-white p-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone No"
          value={formData.phone} // Bind value to formData
          onChange={handleChange}
          className="w-full text-white p-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address} // Bind value to formData
          onChange={handleChange}
          className="w-full text-white p-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          name="residentSince"
          placeholder="Society Joining Year"
          value={formData.residentSince} // Bind value to formData
          onChange={handleChange}
          className="w-full text-white p-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password} // Bind value to formData
          onChange={handleChange}
          className="w-full text-white p-2 bg-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
