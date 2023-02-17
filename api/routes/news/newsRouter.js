const express = require("express");
const { getNews } = require("../../controllers/news/get/getNews");
const { getNewsByID } = require("../../controllers/news/get/getNewsById");
const { getNewsByName } = require("../../controllers/news/get/getNewsByName");
const { handleNews } = require("../../controllers/news/createNews");
const { modifyNews } = require("../../controllers/news/updateNews");

const router = express.Router();

router.get("/", getNews);
router.get("/:id", getNewsByID);
router.get("/:name", getNewsByName);
router.post("/", handleNews);
router.put("/:id", modifyNews);

module.exports = router