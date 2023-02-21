const express = require("express");
const router = express.Router();
const handleReadDocuments = require("../../controllers/documents/readDocumentsController")

router.get("/", handleReadDocuments)

module.exports = router