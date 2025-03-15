const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../database/schemas/User");

const loginHandler = async (req, res) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email: email});
    if (!user) {
        return res.status(401).json({error: "Invalid credentials"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({error: "Invalid credentials"});
    }
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
    });
    res.status(200).json({
        message: "Login successful",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });
};

module.exports = loginHandler;
