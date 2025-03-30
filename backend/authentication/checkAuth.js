const jwt = require("jsonwebtoken");
const UserModel = require("../database/schemas/User");

const checkAuthHandler = async (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id).select("-password");
        console.log("User", user);

        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json({
            message: "User authenticated successfully",

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                skills: user.skills,
                supportedCauses: user.supportedCause,
                photo: user.profilePicture,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Invalid token"});
    }
};

module.exports = checkAuthHandler;
