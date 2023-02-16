const express = require("express");
const {getNews, handleNews, modifyNews} = require("../../controllers/newsController");

const router = express.Router();

router.use("/mainNews", getNews);
router.use("/createNews", handleNews);
router.use("/modifyNews/:id", modifyNews);

module.exports = router