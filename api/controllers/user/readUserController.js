const user = require("../../models/user");
const handelReadUsers = async (req, res) => {
  const busqueda = req.body;
  try {
    let allUsers = await user.find(busqueda);
    if (!allUsers || allUsers.length === 0)
      return res
        .status(400)
        .json({
          message: "ningun usuario coincide con la busqueda seleccionada",
        });
    allUsers = allUsers.map(usuario => {
        const correctedUser = {...usuario["_doc"]}
        delete correctedUser.password
        delete correctedUser.refreshToken
        return {...correctedUser}
    }
        );
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = handelReadUsers;
