const express = require('express');
const veryfyJWT = require("../../middleware/verifyJWT");
const { getPosts, getPostById } = require("../../controllers/blog/getBlogController")
const createBlogController = require("../../controllers/blog/createBlogController")
const updateBlogController = require("../../controllers/blog/updateBlogController")
const deleteBlogController = require("../../controllers/blog/deleteBlogController")

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', veryfyJWT, createBlogController);
router.put('/:id', veryfyJWT, updateBlogController);
router.delete('/:id', veryfyJWT, deleteBlogController);

module.exports = router;