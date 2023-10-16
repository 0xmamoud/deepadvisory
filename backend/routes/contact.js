const express = require("express");
const router = express.Router();
const sendEmail = require("../middleware/cta");

router.post("/", sendEmail);
module.exports = router;
