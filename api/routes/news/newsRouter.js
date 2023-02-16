const express = require("express");
const {getNews, handleNews, modifyNews} = require("../../controllers/news/newsController");

const router = express.Router();

router.get("/mainNews", getNews);
router.post("/createNews", handleNews);
router.put("/modifyNews/:id", modifyNews);

module.exports = router