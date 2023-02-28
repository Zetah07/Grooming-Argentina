const express = require("express");
const { getCategories } = require("../../controllers/category/getCategories");
const { handleCreateCategory } = require("../../controllers/category/createCategory");
const { deleteCategory } = require("../../controllers/category/deleteCategory");

const router = express.Router();

router.get("/", getCategories);
router.post("/", handleCreateCategory);
router.delete("/:id", deleteCategory );

module.exports = router;