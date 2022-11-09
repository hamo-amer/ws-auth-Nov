const express = require("express");
const { signUp, signIn, current } = require("../controllers/authControllers");
const isAuth = require("../middleware/isAuth");
const {
    registerRules,
    validator,
    loginRules,
} = require("../middleware/validator");
const router = express.Router();

//@ desc sign up create new user
//@ route POST /signup
//@ access Public
router.post("/signup", registerRules, validator, signUp);
//@ desc sign in
//@ route POST /signin
//@ access Public
router.post("/signin", loginRules, validator, signIn);
//@ desc get current user
//@ route GET /current
//@ access Private
router.get("/current", isAuth, current);

module.exports = router;
