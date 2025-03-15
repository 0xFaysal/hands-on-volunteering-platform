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
    },
    {
        timestamps: true,
        collection: "users",
    }
);

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
