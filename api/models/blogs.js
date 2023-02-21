const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports = mongoose.model('blog', blogSchema);