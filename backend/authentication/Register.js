const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../database/schemas/User");

const registerHandler = async (req, res) => {
    const {name, email, password} = req.body;

    // Check if the user already exists
    const existingUser = await UserModel.findOne({email: email});
    if (existingUser) {
        return res.status(400).json({error: "User already exists"});
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserModel({
        name: name,
        email: email,
        password: hashedPassword,
    });

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });

    try {
        await newUser.save();
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
        });
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
};
module.exports = registerHandler;
