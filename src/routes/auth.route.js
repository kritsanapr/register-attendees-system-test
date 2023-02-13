const express = require("express");
const router = express.Router();
const { login, register, me } = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/me/:id", me);

module.exports = router;
