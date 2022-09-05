import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      // unique: true,
    },
    lastname: {
      type: String,
      required: true,
      // unique: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
