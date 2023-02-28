const express = require("express");
const { getCategories } = require("../../controllers/category/getCategories");
const {handleCreateCategory} = require("../../controllers/category/createCategory");

const router = express.Router();

router.get("/", getCategories);
router.post("/", handleCreateCategory);

module.exports = router;