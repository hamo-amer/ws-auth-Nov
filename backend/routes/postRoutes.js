const express = require("express");
const { addPost, getAllPosts } = require("../controllers/postController");
const isAuth = require("../middleware/isAuth");
const { verifyPost, validator } = require("../middleware/validator");
const router = express.Router();

router.post("/", isAuth, verifyPost, validator, addPost);
router.get("/", getAllPosts);

module.exports = router;
