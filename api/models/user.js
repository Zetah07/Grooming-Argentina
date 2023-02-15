const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: Number,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    rol: {
      User: {
        type: Number,
        default: 2001
      },
      Admin: Number,
      Editor: Number,
      HumanResources: Number,
      Volunteer: Number
    },
    refreshToken: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model('user', userSchema)