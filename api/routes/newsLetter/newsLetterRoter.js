const { Router } = require("express");
const router = Router();
const handleReadNewsLetter = require("../../controllers/newsLetter/readNewsLetterController")
const handleDeleteNewsLetter = require("../../controllers/newsLetter/deleteNewsLetterController")
const handleCreateNewsLetter = require("../../controllers/newsLetter/createNewsLetterController")
const handleReportsNewsLetter = require("../../controllers/newsLetter/reportNewsLetterController")

router.get("/report", handleReportsNewsLetter)
router.get("/", handleReadNewsLetter);
router.post("/", handleCreateNewsLetter)
router.delete("/", handleDeleteNewsLetter);


module.exports = router;
