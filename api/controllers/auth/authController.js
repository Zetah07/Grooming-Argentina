const user = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  const passwordString = JSON.stringify(password);
  if (!username || !passwordString)
    return res
      .status(400)
      .json({ messege: "Username and password are required" });
  try {
    const foundUser = await user.findOne({ username: username }).exec();
    if (!foundUser) return res.sendStatus(401);

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      //JWT here
      const rol = foundUser.rol
      const accessToken = jwt.sign(
        { "UserInfo" : { username: foundUser.username, rol } },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30m" }
      );
      const refreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      //modificamos el usuario que hizo match agregandole la propiedad RefreshToken
      await user.updateOne(
        { username: username },
        { refreshToken: refreshToken }
      );
      //tocar cosas aqui

      //sending refreshtoken trough http only cokie and setting expiration date in ms
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
        secure: false,
      });
      //in production add: secure: true to the cookie

      //sending the accessToken as json
      res.json({ accessToken });
      // res.json({ success: `User ${username} is logged in` });
    } else {
      return res
        .status(402)
        .json({ message: "usuario o contraseña incorrectas" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { handleLogin };
