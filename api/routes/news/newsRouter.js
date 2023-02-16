const express = require("express");
const { getNews } = require("../../controllers/news/getNews");
const { handleNews } = require("../../controllers/news/createNews");
const { modifyNews } = require("../../controllers/news/updateNews");

const router = express.Router();

router.get("/", getNews);
router.post("/", handleNews);
router.put("/:id", modifyNews);

module.exports = router