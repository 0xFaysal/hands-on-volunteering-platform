const mongoose = require("mongoose");

const User = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        skills: {
            type: [String],
            default: [],
        },
        supportedCauses: {
            type: [String],
            default: [],
        },
        photo: {
            type: String,
            default: "",
        },
        isLogin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        collection: "users",
    }
);

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
