const express = require("express")
const { Router } = require('express');
const { handleNewUser } = require("../../controllers/registerController")

const router = Router()

router.post("/", handleNewUser)

module.exports = router;