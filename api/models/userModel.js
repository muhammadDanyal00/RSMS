import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  residentSince: {
    type: Number,
    required: true,
  },
  notificationsEnabled: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const User = mongoose.model("User", userSchema);
export default User;
