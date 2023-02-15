const express = require("express")
const { Router } = require('express');
const { handleLogin } = require("../../controllers/authController")

const router = Router()

router.post("/", handleLogin)

module.exports = router;