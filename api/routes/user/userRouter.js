const { Router } = require("express");
const router = Router();
const { handleNewUser } = require("../../controllers/newUserController")

router.post("/", handleNewUser);


module.exports = router;
