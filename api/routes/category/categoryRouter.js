const express = require("express");
const { getCategories } = require("../../controllers/category/getCategories");
const { handleCreateCategory } = require("../../controllers/category/createCategory");
const { deleteCategory } = require("../../controllers/category/deleteCategory");
const { getCategoriesAndNews } = require("../../controllers/category/getCategorywithNews");

const router = express.Router();

router.get("/", getCategories);
router.get("/withNews", getCategoriesAndNews);
router.post("/", handleCreateCategory);
router.delete("/:id", deleteCategory );

module.exports = router;