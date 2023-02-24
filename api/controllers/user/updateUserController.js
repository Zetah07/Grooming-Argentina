const users = require("../../models/user");
const bcrypt = require("bcrypt");

const handleUpdateuser = async (req, res) => {
  const { token, user, newPass, name, rol } = req.body;

  if (token) {
    try {

      const userToUpdate = await users.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      }).exec();

      if (!userToUpdate) {
        return res.status(400).json({
          message: "El token de reseteo de contraseña es inválido o ha expirado",
        });
      }


      const hashedPwd = await bcrypt.hash(newPass, 10);
      userToUpdate.password = hashedPwd;
      userToUpdate.resetPasswordToken = null;
      userToUpdate.resetPasswordExpires = null;
      await userToUpdate.save();

      return res.status(200).json({
        message: "La contraseña se ha actualizado correctamente",
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else if (user) {
    if (typeof user !== "number") {
      return res.status(400).json({ message: "usuario invalido" });
    }

    try {
      const userToUpdate = await users.findOne({ username: user }).exec();

      if (userToUpdate === null) {
        return res
          .status(400)
          .json({ message: "No se pudo encontrar el usuario" });
      }

      if (newPass) {
        const hashedPwd = await bcrypt.hash(newPass, 10);
        userToUpdate.password = hashedPwd;
      }
      if (name) {
        userToUpdate.name = name;
      }
      if (rol) {
        userToUpdate.rol = rol;
      }

      await userToUpdate.save();

      return res.status(200).json({
        message: `se actualizo la informacion del usuario ${user}`,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    return res
      .status(400)
      .json({ message: "No se proporcionaron parametros validos" });
  }
};

module.exports = handleUpdateuser;
