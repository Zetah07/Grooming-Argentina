const express = require("express")
const router = express.Router()

const userRoute = require("./user/userRouter");
const authRouter = require("./auth/authRouter");
const newsRouter = require("./news/newsRouter")
const userStatusRouter = require("./userStatus/userStatusRouter")
const coursesRouter = require("./courses/coursesRouter")
const newsLetterRouter = require("./newsLetter/newsLetterRoter")
const blogs = require("./blogs/blogsRouter")
const reports = require("./reports/reportsRout")

router.use("/users", userRoute);
router.use("/auth", authRouter);
router.use("/userstatus", userStatusRouter);
router.use("/news", newsRouter);
router.use("/courses", coursesRouter)
router.use("/newsletter", newsLetterRouter)
router.use("/blog", blogs);
router.use("/reports", reports);


module.exports = router;