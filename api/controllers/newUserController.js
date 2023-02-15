const user = require("../models/user")
const bcrypt = require("bcrypt")

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ "messege": "Username and password are required" })

  const duplicate = await user.findOne({ username: username }).exec();
  if (duplicate) return res.status(409).json({ "messege": `Username ${username} already exist` })

  try {
    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = new user({
      username: username,
      password: hashedPwd
    });

    await newUser.save();

    res.status(201).json({ "messege": `User ${username} created` })

  } catch (error) {
    res.status(500).json({ "messege": error.messege })
  }
}

module.exports = {
  handleNewUser
};