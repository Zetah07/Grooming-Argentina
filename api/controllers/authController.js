const user = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ "messege": "Username and password are required" })
  const foundUser = await user.findOne({ username: username }).exec();
  if (!foundUser) return res.sendStatus(401);

  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    //JWT here
    res.json({ "success": `User ${username} is logged in` })
  } else {
    res.sendStatus(402)
  }
}

module.exports = { handleLogin };