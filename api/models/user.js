const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: Number,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      enum: ["user", "admin", "editor", "hr", "volunteer"],
      default: "user",
    },
    refreshToken: {
      type: String,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);


module.exports = mongoose.model('user', userSchema);

