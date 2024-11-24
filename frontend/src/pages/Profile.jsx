import { useEffect, useState } from "react";
import api from "../api/api";
import ChangePassword from "../components/ChangePassword";
import DeleteAccountButton from "../components/DeleteAccountButton";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangePasswordOpen, setChangePasswordOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    FullName: "",
    email: "",
    phone: "",
    address: "",
    residentSince: "",
  });

  // Fetch profile data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/user/profile");
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfile();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle profile updates
  const handleUpdateProfile = async () => {
    try {
      await api.put("/user/profile", profileData);
      setIsEditing(false);
      console.log("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Open change password modal
  const openChangePasswordModal = () => setChangePasswordOpen(true);
  const closeChangePasswordModal = () => setChangePasswordOpen(false);

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-gray-800 dark:text-white">
        My Profile
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        <span className="font-medium text-gray-800 dark:text-white">
          Resident Since:
        </span>
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {profileData.residentSince}
        </span>
      </p>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
        <form className="space-y-4 sm:space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="FullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              id="FullName"
              name="FullName"
              className="block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm"
              value={profileData.FullName}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm"
              value={profileData.email}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm"
              value={profileData.phone}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              className="block w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white text-sm"
              value={profileData.address}
              onChange={handleInputChange}
              readOnly={!isEditing}
            />
          </div>

          {/* Edit Mode Buttons */}
          {isEditing ? (
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleUpdateProfile}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-sm"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-sm"
            >
              Edit Profile
            </button>
          )}
        </form>
      </div>

      {/* Account Settings Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mt-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Account Settings
        </h2>

        {/* Email Notifications */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-white">
              Email Notifications
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Receive email updates about your reported issues
            </p>
          </div>
          <button className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm">
            Manage
          </button>
        </div>

        {/* Change Password Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-white">
              Change Password
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Update your account password
            </p>
          </div>
          <button
            onClick={openChangePasswordModal}
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
          >
            Change
          </button>
        </div>

        {/* Change Password Modal */}
        <ChangePassword
          isOpen={isChangePasswordOpen}
          onClose={closeChangePasswordModal}
        />

        {/* Delete Account */}
        <DeleteAccountButton />
      </div>
    </div>
  );
}
