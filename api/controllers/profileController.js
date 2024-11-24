import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Get user profile
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    res.json(user);
  } catch (error) {
    console.error("Error in getProfile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------------------------------------------------------
// Update user profile
export const updateProfile = async (req, res) => {
  try {
    const { FullName, email, phone, address, residentSince } = req.body;

    // Get user ID from authenticated request
    const userId = req.user._id;

    // Validation
    if (residentSince > new Date().getFullYear()) {
      return res.status(400).json({ message: "Invalid resident year" });
    }

    // Find and update user
    const user = await User.findByIdAndUpdate(
      userId,
      {
        FullName,
        email,
        phone,
        address,
        residentSince,
        updatedAt: Date.now(),
      },
      { new: true, runValidators: true } // Added runValidators for extra safety
    ).select("-password");

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error in updateProfile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// -------------------------------------------------------------------

// Update notification settings
// export const updateNotifications = async (req, res) => {
//   try {
//     const { enabled } = req.body;

//     await User.findByIdAndUpdate(req.user._id, {
//       notificationsEnabled: enabled,
//     });

//     res.json({
//       message: "Notification settings updated",
//       notificationsEnabled: enabled,
//     });
//   } catch (error) {
//     console.error("Error in updateNotifications:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// -------------------------------------------------------------------

// Change password
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // Validate inputs
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: "Both current and new passwords are required",
      });
    }

    // Find user
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Validate new password (add your password requirements)
    if (newPassword.length < 6) {
      return res.status(400).json({
        message: "New password must be at least 6 characters long",
      });
    }

    // Update password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error in changePassword:", error);
    res.status(500).json({
      message: "Server error",
      error: error.message, // Add this for debugging
    });
  }
};
// -------------------------------------------------------------------

// Delete account
export const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;
    const user = await User.findById(req.user._id);

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    // Hard delete
    await User.findByIdAndDelete(req.user._id);
    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error in deleteAccount:", error);
    res.status(500).json({ message: "Server error" });
  }
};
