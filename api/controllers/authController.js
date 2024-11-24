import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "./config/.env" });

const jwtSecret = process.env.JWT_SECRET_KEY; // initialize and access the token

// Register==============================================
export const signup = async (req, res) => {
  const { FullName, email, password, phone, address, residentSince } = req.body;

  // Consider adding input validation here
  if (
    !FullName ||
    !email ||
    !password ||
    !phone ||
    !address ||
    !residentSince
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashPassword = bcrypt.hashSync(password, 10);

    // Create new user
    const user = new User({
      FullName,
      email,
      phone,
      address,
      residentSince,
      password: hashPassword,
    });

    // Save the user
    await user.save();
    // Consider not returning the entire user object (especially the password)
    return res
      .status(201)
      .json({ message: "User created successfully", userId: user._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Login================================================
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    // Compare passwords
    const isPassMatch = bcrypt.compareSync(password, existingUser.password);
    if (!isPassMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: existingUser._id }, jwtSecret, {
      expiresIn: "1h",
    });

    // existingUser.token = token;
    // // Save the updated user instance in Db
    // await existingUser.save();

    return res.json({ token, userId: existingUser._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
