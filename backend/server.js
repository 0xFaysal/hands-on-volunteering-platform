const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const {connectionDb} = require("./database/connectionDB");
const loginHandler = require("./authentication/Login");
const registerHandler = require("./authentication/Register");
const checkAuthHandler = require("./authentication/checkAuth");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials: true,
        sameSite: "lax", // Changed from "none"
        secure: process.env.NODE_ENV === "production", // Only true in production
    })
);
app.use(express.json());
app.use(cookieParser());

//MongoDB connection
connectionDb();

app.use((req, res, next) => {
    console.log(`${new Date()}: ${req.method} ${req.url}`);
    next(); // Pass control to next middleware
});

// error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON format",
            error: "Please check your request body format",
        });
    }
    next();
});
//authentication

//routers
app.get("/", (req, res) => {
    res.send("Hello from HandsOn! Server");
});

app.post("/api/auth/register", registerHandler);

app.post("/api/auth/login", loginHandler);

app.get("/api/auth/check", checkAuthHandler);

// General error handler for unhandled errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: "Internal server error",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Server is running on port ${PORT}`);
});
