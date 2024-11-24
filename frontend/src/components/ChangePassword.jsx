import { useState } from "react";
import api from "../api/api";
import { useSelector } from "react-redux";

const ChangePassword = ({ isOpen, onClose }) => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const token = useSelector((state) => state.auth.token);

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault(); // Prevent form submission
    setErrorMessage("");
    setSuccessMessage("");

    try {
      if (!token) {
        setErrorMessage("Authentication token is missing.");
        return;
      }

      const response = await api.put(
        "/user/password",
        passwords, // Send the password object
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Show success message without closing the modal
      setSuccessMessage("Password changed successfully!");
      setPasswords({ currentPassword: "", newPassword: "" }); // Clear form
    } catch (error) {
      console.error("Password change error:", error.response || error);
      setErrorMessage(
        error.response?.data?.message || "Failed to update password"
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Change Password
        </h2>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleChangePassword}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 rounded-lg w-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              placeholder="Enter current password"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 rounded-lg w-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
