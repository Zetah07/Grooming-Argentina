const user = require("../../models/user");
const bcrypt = require("bcrypt");
const userStatus = require("../../models/userStatus");

const handleNewUser = async (req, res) => {
  const { username, password, registrationId, name, rol} = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ messege: "Username y password son requeridos" });
  if (!name) return res.status(400).json({ messege: "el nombre es requerido" });
  try {
    const duplicate = await user.findOne({ username: username }).exec();
    if (duplicate)
      return res
        .status(409)
        .json({ messege: `El usuario ${username} ya existe` });
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
    });
    if (rol){
      newUser.rol = rol
    }
    await newUser.save();
    return res.status(201).json({ messege: `Usuario ${username} creado` });
  } catch (error) {
    return res.status(500).json({ messege: error.message });
  }
};

module.exports = {
  handleNewUser,
};
