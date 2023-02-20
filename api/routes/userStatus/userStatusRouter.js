const { Router } = require("express");
const router = Router();
const {
  handleUserStatus,
  getUserStatusByid,
} = require("../../controllers/userStatus/userStatusController");
const handleUserStatusCreation = require("../../controllers/userStatus/createUserStatusController.js");
const updateUserStatus = require("../../controllers/userStatus/updateUserStatusController.js");
const fileUpload = require("express-fileupload");

router.get("/", handleUserStatus);
router.get("/:id", getUserStatusByid);
router.put("/:id", updateUserStatus);
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
