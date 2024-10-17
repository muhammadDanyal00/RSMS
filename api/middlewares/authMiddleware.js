import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication failed: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Decoded token:", decoded); // For debugging

    const user = await User.findById(decoded.userId);
    console.log("User found:", user); // For debugging

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed: User not found" });
    }
    // req.user = user; // get the full user object
    req.user = user.toObject(); // Convert to a plain JavaScript object
    console.log("req.user set in middleware:", req.user); // For debugging
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res
      .status(401)
      .json({ message: "Authentication failed", error: error.message });
  }
};
