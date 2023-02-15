const express = require("express")
const router = express.Router()
const logOut = require("../../controllers/logOutController")

router.get("/", logOut.handleLogOut)

module.exports = router;