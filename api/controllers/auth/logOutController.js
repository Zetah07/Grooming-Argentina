const jwt = require("jsonwebtoken");
const user = require("../../models/user");
require("dotenv").config();

const handleLogOut = async(req, res) => {
    //on client also delete access token
    const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  const refreshToken = cookies.jwt;

  //buscando en la db el usuario y que coinsida el refreshtoken
  const foundUser = await user.findOne({ refreshToken: refreshToken }).exec();
   
  //borrando las cookies en caso de que tenga un token pero no esta en la bd
  if (!foundUser) {
    res.clearCookie("jwt", {httpOnly: true, sameSite:"None" } )
    //in production add: secure: true to the cookie
    return res.sendStatus(204);
  }

  //borrar el refreshtoken en la db
  foundUser.refreshToken  = undefined
  await foundUser.save()
  //{}

  //borramos la cookie
  res.clearCookie("jwt", {httpOnly: true, sameSite:"None" } )
  //in production add: secure: true to the cookie
  res.sendStatus(204);
};

module.exports = {handleLogOut}