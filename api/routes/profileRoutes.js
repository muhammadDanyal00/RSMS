import express from "express";
const router = express.Router();
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  getProfile,
  updateProfile,
  // updateNotifications,
  changePassword,
  deleteAccount,
} from "../controllers/profileController.js";
// Applying middleware globally:
router.use(authMiddleware);

router.get("/profile", getProfile); // used to get the user info
router.put("/profile", updateProfile); // used to update the profile data
// router.put("/notifications", updateNotifications); // used to manage the notifications of app.
router.put("/password", changePassword); // used to change the password you gave during your login
router.delete("/account", deleteAccount); // used to delete an account parmanently from the Db.

export default router;
