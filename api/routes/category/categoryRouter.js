const express = require("express");
const {handleCreateCategory} = require("../../controllers/category/createCategory");

const router = express.Router();

router.post("/", handleCreateCategory);

module.exports = router;