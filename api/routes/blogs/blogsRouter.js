const express = require('express');
const veryfyJWT = require("../../middleware/verifyJWT");
const verifyRoles = require("../../middleware/verifyRoles");
const { getPosts, getPostById } = require("../../controllers/blog/getBlogController")
const createBlogController = require("../../controllers/blog/createBlogController")
const updateBlogController = require("../../controllers/blog/updateBlogController")
const deleteBlogController = require("../../controllers/blog/deleteBlogController")

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', veryfyJWT, verifyRoles(["user", "admin", "hr", "volunteer", "editor"]), createBlogController);
router.put('/:id', veryfyJWT, verifyRoles(["user", "admin", "hr", "volunteer", "editor"]), updateBlogController);
router.delete('/:id', veryfyJWT, verifyRoles(["user", "admin", "volunteer", "editor"]), deleteBlogController);

module.exports = router;