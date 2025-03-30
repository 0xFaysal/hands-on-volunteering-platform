const UserModel = require("../database/schemas/User");
const multer = require("multer");

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const UploadInfo = (req, res) => {};
