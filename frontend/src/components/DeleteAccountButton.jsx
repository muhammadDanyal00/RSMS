import { useState } from "react";
import api from "../api/api";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const DeleteAccountButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch(); // Initialize dispatch

  const handleDeleteAccount = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await api.delete("/user/account", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { password },
      });

      setSuccessMessage(response.data.message);
      setPassword(""); // Clear password input

      // Log out the user after 3 seconds
      setTimeout(() => {
        dispatch(logout());
      }, 3000);
    } catch (error) {
      console.error("Delete account error:", error.response || error);
      setErrorMessage(
        error.response?.data?.message || "Failed to delete account"
      );
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <div>
          <h3 className="font-medium text-gray-800 dark:text-white">
            Delete Account
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Permanently delete your account
          </p>
        </div>
        <button
          onClick={toggleModal}
          className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-medium bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 text-white"
        >
          Delete
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Confirm Delete Account
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

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Please enter your password to confirm account deletion.
            </p>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 dark:border-gray-700 rounded-lg w-full p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
              placeholder="Enter your password"
              required
            />

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handleDeleteAccount}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={toggleModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAccountButton;
