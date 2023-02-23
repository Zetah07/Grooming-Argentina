const jwt = require("jsonwebtoken");
const user = require("../../models/user");
require("dotenv").config();

const handleRefreshToken = async(req, res) => {
  
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  
  //buscando el user en la DB
  const foundUser = await user.findOne({ refreshToken: refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username) return sendStatus(403);
    const rol = foundUser.rol
    const accessToken = jwt.sign(
      { "UserInfo" : { username: foundUser.username, rol } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.json({ accessToken })
  });
};

module.exports = {handleRefreshToken}