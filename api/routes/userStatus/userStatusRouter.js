const { Router } = require("express");
const router = Router();
const { handleUserStatus, getUserStatusByid } = require("../../controllers/userStatus/userStatusController")
const handleUserStatusCreation = require("../../controllers/userStatus/createUserStatusController.js")
const updateUserStatus = require("../../controllers/userStatus/updateUserStatusController.js")

//agregar try catch en las rutas por si acaso
//autenticacion por roles
router.get("/", handleUserStatus)
router.get("/:id", getUserStatusByid)
router.post("/", handleUserStatusCreation);
router.put("/:id", updateUserStatus);

module.exports = router