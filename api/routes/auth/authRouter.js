const express = require("express")
const router = express.Router()
const authRoutes = require("./authRoutes")
const logOutRoutes = require("./logOutRoutes")
const refreshRoutes = require("./refreshRoutes")


router.use("/login", authRoutes);
router.use("/logOut", logOutRoutes);
router.use("/refresh", refreshRoutes);


module.exports = router