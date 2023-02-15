const express = require("express")
const router = express.Router()

const userRoute = require("./src/userRoute");

router.get("/",(req, res)=>{
    res.send("Test") 
})

router.use("/users", userRoute);

module.exports = router