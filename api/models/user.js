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