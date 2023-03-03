const { Router } = require("express");
const router = Router();
const { handleNewUser } = require("../../controllers/user/newUserController")
const handleUpdateuser = require("../../controllers/user/updateUserController")
const handelReadUsers = require("../../controllers/user/readUserController");
const handleDeleteUser = require("../../controllers/user/deleteUserController");
const veryfyJWT = require("../../middleware/verifyJWT");
const verifyRoles = require("../../middleware/verifyRoles");

router.post("/",veryfyJWT, verifyRoles(["admin"]), handleNewUser);
router.put("/", handleUpdateuser)//pending roles
router.get("/",veryfyJWT, verifyRoles(["admin"]), handelReadUsers)
router.delete("/",veryfyJWT, verifyRoles(["admin"]), handleDeleteUser)

module.exports = router;
