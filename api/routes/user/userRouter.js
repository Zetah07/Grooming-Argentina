const { Router } = require("express");
const router = Router();
const { handleNewUser } = require("../../controllers/user/newUserController")
const handleUpdateuser = require("../../controllers/user/updateUserController")
const handelReadUsers = require("../../controllers/user/readUserController");
const handleDeleteUser = require("../../controllers/user/deleteUserController");

router.post("/", handleNewUser);
router.put("/", handleUpdateuser)
router.get("/", handelReadUsers)
router.delete("/", handleDeleteUser)

module.exports = router;
