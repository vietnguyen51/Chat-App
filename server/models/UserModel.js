const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Provide name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Provide email"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Provide a valid email"]
    },
    password: {
        type: String,
        required: [true, "Provide password"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    profile_pic: {
        type: String, // URL to the user's avatar image
        default: ""
    },


},{
    timestamps : true
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel