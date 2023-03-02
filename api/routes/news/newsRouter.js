const express = require("express");
const { getNews } = require("../../controllers/news/getNews");
const { handleNews } = require("../../controllers/news/createNews");
const { modifyNews } = require("../../controllers/news/updateNews");
const { deleteNews } = require("../../controllers/news/deleteNews");
const veryfyJWT = require("../../middleware/verifyJWT");
const verifyRoles = require("../../middleware/verifyRoles");
const upload = require('../../config/multer');


const router = express.Router();

router.get("/", getNews);
router.post("/", veryfyJWT, verifyRoles(["admin", "hr", "editor"]), upload.single("img"), handleNews);
router.put("/:id", veryfyJWT, verifyRoles(["admin", "hr", "editor"]), modifyNews);
router.delete("/:id", veryfyJWT, verifyRoles(["admin", "hr", "editor"]), deleteNews);

module.exports = router