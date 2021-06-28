const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    scripture: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
