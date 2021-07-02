const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a name"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "please provide an email"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    role: {
      type: String,
      enum: ["superadmin", "admin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { adminSchema, Admin };
