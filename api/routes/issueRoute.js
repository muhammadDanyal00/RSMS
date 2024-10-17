import express from "express";
const router = express.Router();
import {
  createIssue,
  getMyReports,
  getIssueDetails,
  updateIssueStatus,
} from "../controllers/issueController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

// Applying middleware globally:
router.use(authMiddleware);

router.post("/create", createIssue); // used to create a new issue
router.get("/my-reports", getMyReports); // used to get all the reports of the user
router.get("/:id", getIssueDetails); // used to get the details of a specific issue
router.put("/:id/status", updateIssueStatus); // will only be used by admin

export default router;
