const User = require("../database/schemas/User");
const path = require("path");
const fs = require("fs").promises;

const ensureUploadDir = async () => {
    try {
        const uploadDir = path.join(process.cwd(), "upload", "user");
        await fs.mkdir(uploadDir, {recursive: true});
    } catch (error) {
        console.error("Error creating upload directory:", error);
    }
};

async function UploadInfo(req, res, data) {
    try {
        const userId = req.user.id;
        await ensureUploadDir();
        console.log("User ID:", userId);
        console.log("Request Body:", req.body);
        console.log("Skills:", data.skills);
        console.log("Cause:", data.cause);
        console.log("File:", data.photo);
        console.log("File path:", path.join(process.cwd(), data.photo));
        console.log("Data:", data);

        // Update user with new information
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    profilePicture: data.photo, // Now expects a file path
                    skills: data.skills,
                    supportedCause: data.cause,
                },
            },
            {new: true}
        );

        res.status(200).json({
            success: true,
            message: "Information updated successfully",
            user: updatedUser,
        });
    } catch (error) {
        console.error("Error in UploadInfo:", error);
        res.status(500).json({
            success: false,
            message: "Failed to update information",
            error: error.message,
        });
    }
}

module.exports = UploadInfo;
