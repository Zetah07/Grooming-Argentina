const user = require("../../models/user");
const bcrypt = require("bcrypt");
const userStatus = require("../../models/userStatus");

const handleNewUser = async (req, res) => {
  const { username, password, registrationId, name, rol, email } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Numero de documento y contraseña son requeridos" });
  if (!name || !password || !username || !email)
    return res.status(400).json({ message: "Datos faltantes" });
  try {
    const duplicateUsername = await user.findOne({ username: username }).exec();
    if (duplicateUsername)
      return res
        .status(409)
        .json({ message: `El usuario ${username} ya existe` });
    const duplicateEmail = await user.findOne({ email: email }).exec();
    if (duplicateEmail)
      return res
        .status(409)
        .json({ message: `El email ${email} ya esta registrado` });
    if (registrationId) {
      const statusDoc = await userStatus.findById(registrationId).exec();
      if (statusDoc.status !== "approved") {
        return res
          .status(400)
          .json({ message: `Estado de registro no aprovado` });
      }
    }
    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = new user({
      username: username,
      password: hashedPwd,
      name: name,
      email: email,
    });
    if (rol) {
      newUser.rol = rol;
    }
    await newUser.save();
    return res.status(201).json({ message: `Usuario ${username} creado` });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleNewUser,
};
