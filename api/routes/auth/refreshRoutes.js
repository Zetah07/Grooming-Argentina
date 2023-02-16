const express = require("express")
const router = express.Router()
const refreshToken = require("../../controllers/auth/refreshTokenController")

router.get("/", refreshToken.handleRefreshToken)

module.exports = router;