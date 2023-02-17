const express = require("express")
const router = express.Router()

const userRoute = require("./user/userRouter");
const authRouter = require("./auth/authRouter");
const newsRouter = require("./news/newsRouter")
const userStatusRouter = require("./userStatus/userStatusRouter")

router.use("/users", userRoute);
router.use("/auth", authRouter);
router.use("/userstatus",userStatusRouter);
router.use("/news", newsRouter);

module.exports = router;