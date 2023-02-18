const users = require("../../models/user");
const bcrypt = require("bcrypt");

const handleUpdateuser = async (req, res) => {
  const { user, newPass, name, rol } = req.body;
  if (typeof user !== "number") return res
  .status(400)
  .json({ message: "usuario invalido" });
  try {
    const userToUpdate = await users.findOne({ username: user }).exec();
    
    if (userToUpdate === null)
      return res
        .status(400)
        .json({ message: "No se pudo encontrar el usuario" });
    if (newPass) {
        const hashedPwd = await bcrypt.hash(newPass, 10);
        userToUpdate.password = hashedPwd
    }
    if (name) {
      userToUpdate.name = name;
    }
    if (rol){
        userToUpdate.rol = rol;
    }
    await userToUpdate.save();
    console.log("ejecucion");
    return res
      .status(200)
      .json({ message: `se actualizo la informacion del usuario ${user}` });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = handleUpdateuser;
