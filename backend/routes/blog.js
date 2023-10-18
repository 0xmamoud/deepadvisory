const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const blogCtrl = require("../controllers/blogController");

router.get("/", blogCtrl.getAllArticle);
router.post("/", auth, blogCtrl.createArticle);
router.get("/:id", blogCtrl.getOneArticle);
router.put("/:id", auth, blogCtrl.modifyArticle);
router.delete("/:id", auth, blogCtrl.deleteArticle);

module.exports = router;
