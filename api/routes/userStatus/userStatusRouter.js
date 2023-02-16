const { Router } = require("express");
const router = Router();
const handleUserStatus = require("../../controllers/userStatus/userStatusController")
const handleUserStatusCreation = require("../../controllers/userStatus/createUserStatusController.js")
const handleUserStatusUpdate = require("../../controllers/userStatus/updateUserStatusController.js")

//agregar try catch en las rutas por si acaso
//autenticacion por roles
router.get("/" , handleUserStatus)
router.post("/", handleUserStatusCreation);
router.put("/", handleUserStatusUpdate);

module.exports = router