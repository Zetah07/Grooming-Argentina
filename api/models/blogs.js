const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
        },
        content: {
            type: String,
            required: true
        },
        img: {
            type: String,
        },
        link: {
            type: String,
        },
        provinceOrLocation: {
            type: String,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('blog', blogSchema);