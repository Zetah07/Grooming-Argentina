const express = require("express")
const router = express.Router()

const userRoute = require("./user/userRouter");
const authRouter = require("./auth/authRouter")
const userStatusRouter = require("./userStatus/userStatusRouter")


router.use("/users", userRoute);
router.use("/auth", authRouter);
router.use("/userstatus",userStatusRouter);


module.exports = router