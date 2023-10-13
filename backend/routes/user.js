const express = require("express");
const userCtrl = require("../controllers/userController.js");
const router = express.Router();

router.post("/signup", userCtrl.signup);

module.exports = router;
