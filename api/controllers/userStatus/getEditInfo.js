const userStatus = require("../../models/userStatus");

const handleGetEditInfo = async (req, res) => {
  const user = req.user
  try {
    const foundUser = await userStatus.findOne({ document: user });
    const infoSent = [
      "email",
      "phone",
      "profession",
      "address",
      "province",
      "location",
    ];
    if (foundUser) {
      const editedInfo = { ...foundUser["_doc"] };
      for (const key in foundUser) {
        if (!infoSent.includes(key)) delete editedInfo[key];
      }
      return res.status(200).json(editedInfo);
    }
    return res
      .status(400)
      .json({ message: "no se encontro el usuario solicitado" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

module.exports = handleGetEditInfo;
