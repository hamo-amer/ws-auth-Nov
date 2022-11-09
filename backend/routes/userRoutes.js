const express = require("express");
const { updateProfileImage } = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");
const upload = require("../middleware/upload");
const router = express.Router();

router.patch(
    "/profileimage",
    isAuth,
    upload.single("myImage"),
    updateProfileImage
);

module.exports = router;
