import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connect from "./utils/dbConnection.js";
import authRoutes from "./routes/authRoute.js";
import issueRoutes from "./routes/issueRoute.js";
import profileRoutes from "./routes/profileRoutes.js";

import cors from "cors";

dotenv.config({ path: "./config/.env" }); // path to my env. varibles ( hidden )

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// middelwares for Routes
app.use("/api/", authRoutes);
app.use("/api/", issueRoutes);
app.use("/api/user", profileRoutes);

// db integeration
app.listen(PORT, () => {
  connect();
  console.log(`listening at port ${PORT}`);
});
