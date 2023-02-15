const express = require("express")
const router = express.Router()

const userRoute = require("./user/userRouter");
const authRouter = require("./auth/authRouter")

router.use("/users", userRoute);
router.use("/auth", authRouter);


module.exports = router