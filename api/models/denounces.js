const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const denouncesSchema = new mongoose.Schema(
  {
    situation: {
      type: String,
      required: true,
    },
    where: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

denouncesSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('denounce', denouncesSchema);
