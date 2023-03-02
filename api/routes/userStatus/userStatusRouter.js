const { Router } = require("express");
const router = Router();
const {
  handleUserStatus,
  getUserStatusByid,
} = require("../../controllers/userStatus/userStatusController");
const handleUserStatusCreation = require("../../controllers/userStatus/createUserStatusController.js");
const updateUserStatus = require("../../controllers/userStatus/updateUserStatusController.js");
const fileUpload = require("express-fileupload");
const veryfyJWT = require("../../middleware/verifyJWT");
const verifyRoles = require("../../middleware/verifyRoles");

router.get("/", /*veryfyJWT, verifyRoles(["admin", "hr"]),*/ handleUserStatus);
router.get("/:id"/*, veryfyJWT, verifyRoles(["admin", "hr"])*/, getUserStatusByid);
router.put("/:id",/* veryfyJWT, verifyRoles(["admin", "hr"])*/updateUserStatus);
router.post(
  "/",
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 1024 * 1024, // 1 MB
    },
    abortOnLimit: true,
  }),
  handleUserStatusCreation
);

module.exports = router;
