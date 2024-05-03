// const {Router} = require("express");
// const Signup = require("../controller/Signup");

// const router = Router();

// router.post("/signup", Signup())

// module.exports = router

const { Router } = require("express");
const signUp = require("../controller/Signup");
const login = require("../controller/login");
const auth = require("../controller/auth")

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/auth", auth);

module.exports = router;