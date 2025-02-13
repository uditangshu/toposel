const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true
    },
    fullName: { 
        type: String, 
        required: false
    },
    gender: { 
        type: String, 
        enum: ["Male", "Female", "Other"], 
        required: false
    },
    dob: { 
        type: Date, 
        required: false
    },
    country: { 
        type: String, 
        required: false
    },
}, { 
    timestamps: true 
});

module.exports = mongoose.model("User", UserSchema);