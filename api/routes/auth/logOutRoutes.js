const express = require("express")
const router = express.Router()
const logOut = require("../../controllers/auth/logOutController")

router.get("/", logOut.handleLogOut)

module.exports = router;