const express = require("express");
const { getNews } = require("../../controllers/news/getNews");
const { handleNews } = require("../../controllers/news/createNews");
const { modifyNews } = require("../../controllers/news/updateNews");
const veryfyJWT = require("../../middleware/verifyJWT");
const verifyRoles = require("../../middleware/verifyRoles");

const router = express.Router();

router.get("/", getNews);
router.post("/", veryfyJWT, verifyRoles(["admin", "hr", "editor"]), handleNews);
router.put("/:id", veryfyJWT, verifyRoles(["admin", "hr", "editor"]), modifyNews);

module.exports = router