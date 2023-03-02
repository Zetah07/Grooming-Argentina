const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

blogSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('blog', blogSchema);