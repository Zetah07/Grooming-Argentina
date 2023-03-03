const userStatus = require("../../models/userStatus");
const user = require("../../models/user");

const handleUserStatusCreation = async (req, res) => {
  try {
    const { CV, adjDocument } = req.files;
    const userRegister = JSON.parse(req.body["userRegister"]);
    if (!CV || !adjDocument)
      return res
        .status(400)
        .json({ message: `No se resivio CV y/o Documento` });
    if (!CV.name.includes(".pdf") || !adjDocument.name.includes(".pdf"))
      return res
        .status(400)
        .json({ message: `Los archivos deben ser tipo PDF` });

    for (const key in userRegister) {
      if (key !== "howManyHours" && key !=="whoGroominPerson") {
        const element = userRegister[key];
        if (!element) {
          return res
            .status(400)
            .json({ message: `El campo ${element} no puede estar vacio` });
        }
      }
    }

    const noRepeatables = [
      "document",
      "phone",
      "email",
      "facebook",
      "twitter",
      "instagram",
      "linkedIn",
    ];

    let promises = Object.keys(userRegister)
      .filter((key) => noRepeatables.includes(key))
      .map((key) => userStatus.findOne({ [key]: userRegister[key] }).exec());
    const results = await Promise.all(promises);

    for (let i = 0; i < results.length; i++) {
      const duplicate = results[i];
      if (duplicate) {
        return res.status(400).json({
          message: `El campo ${noRepeatables[i]} Ya se encuentra regisrtado`,
        });
      }
    }

    const pathCV =
      __dirname + "../../../files/CVs/" + userRegister["document"] + ".pdf";
    const pathDcoument =
      __dirname +
      "../../../files/copyDocument/" +
      userRegister["document"] +
      ".pdf";

    CV.mv(pathCV, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
    adjDocument.mv(pathDcoument, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const brithDate = new Date(userRegister["birthDate"]);
    const userStatusCorrection = {
      ...userRegister,
      status: "pendiente",
      adjDocument: pathDcoument,
      CV: pathCV,
    };

    const newUserStatus = new userStatus(userStatusCorrection);
    await newUserStatus.save();

    res.status(200).json(newUserStatus);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = handleUserStatusCreation;
