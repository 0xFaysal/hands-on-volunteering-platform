const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs").promises;
const sharp = require("sharp");
const {connectionDb} = require("./database/connectionDB");
const loginHandler = require("./authentication/Login");
const registerHandler = require("./authentication/Register");
const checkAuthHandler = require("./authentication/checkAuth");
const UploadInfo = require("./authentication/uploadInfo");
const verifyToken = require("./middleware/verifyToken");
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

// Add this line to serve static files from the upload directory
app.use("/upload", express.static(path.join(process.cwd(), "upload")));

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

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
// app.post("/api/auth/upload_info", upload.single("photo"), uploadInfo);

app.post(
    "/api/auth/upload",
    verifyToken,
    upload.single("photo"),
    async (req, res) => {
        try {
            const {skills, cause} = req.body;
            console.log("User ID:", req.user.id);
            console.log("Request Body:", req.body);
            console.log("Skills:", skills);
            console.log("Cause:", cause);
            console.log("File:", req.file);
            const photo = req.file;
            const parsedSkills = JSON.parse(skills);

            // Create upload directory if it doesn't exist
            const uploadDir = path.join(process.cwd(), "upload", "user");
            await fs.mkdir(uploadDir, {recursive: true});

            let profilePicturePath;
            if (photo) {
                const fileBuffer = photo.buffer;
                const optimizedFileName =
                    Date.now() * Math.round(Math.random() * 1000) +
                    "-" +
                    photo.originalname;
                const optimizedFilePath = path.join(
                    "upload/user",
                    optimizedFileName
                );

                await sharp(fileBuffer)
                    .jpeg({quality: 50})
                    .toFile(path.join(process.cwd(), optimizedFilePath));

                profilePicturePath = optimizedFilePath;
            }
            console.log("Profile picture path:", profilePicturePath);
            console.log("Parsed skills:", parsedSkills);
            console.log("Cause:", cause);

            await UploadInfo(req, res, {
                photo: profilePicturePath,
                skills: parsedSkills,
                cause,
            });
        } catch (error) {
            console.error("Upload error:", error);
            res.status(500).json({
                success: false,
                message: "Upload failed",
                error: error.message,
            });
        }
    }
);

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
