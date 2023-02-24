const { Router } = require("express");
const router = Router();
const handlePasswordReset = require("../../controllers/passwordReset/passwordResetController");
const handleUpdateuser = require("../../controllers/user/updateUserController");


router.post("/", handlePasswordReset)
router.put("/:token", handleUpdateuser)



module.exports = router;