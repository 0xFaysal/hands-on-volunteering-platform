const mongoose = require("mongoose");
require("dotenv").config();

const connectionDb = async () => {
    const uri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

// Event listeners for connection events
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

module.exports = {connectionDb};
