const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        birthDate: {
            type: Date,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        document: {
            type: Number,
            unique: true,
            required: true
        },
        adjDocument: {
            type: String,
            required: true
        },
        Phone: {
            type: Number,
            required: true
        },
        schooling: {
            type: String,
            required: true
        },
        profession: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        howKnowGrooming: {
            type: String,
            required: true
        },
        facebook: {
            type: String,
            required: true
        },
        twitter: {
            type: String,
            required: true
        },
        instagram: {
            type: String,
            required: true
        },
        Linkedin: {
            type: String,
            required: true
        },
        CV: {
            type: String,
            required: true
        },
        processState: {
            type: String,
            required: true
        },
        howManyHours: Number
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('register', registerSchema)