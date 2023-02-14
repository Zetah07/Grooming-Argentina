const mongoose = require('mongoose');

const newsLetterSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        }
    }
);

module.exports = mongoose.model('newsLetter', newsLetterSchema);