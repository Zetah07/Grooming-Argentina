const userStatus = require("../../models/userStatus");
const user = require("../../models/user");

const handleUserStatusCreation = async (req, res) => {
  try {
    const { CV, adjDocument } = req.files;
    const userRegister = JSON.parse(req.body["userRegister"]);
    if (!CV.name.includes(".pdf") || !adjDocument.name.includes(".pdf")) {
      return res
        .status(400)
        .json({ message: `Los archivos deben ser tipo PDF` });
    }

    const pathCV = __dirname + "../../../files/CVs/" + CV.name;
    const pathDcoument =
      __dirname + "../../../files/copyDocument/" + adjDocument.name;

    for (const key in userRegister) {
      if (key !== "howManyHours") {
        const element = userRegister[key];
        if (!element) {
          return res
            .status(400)
            .json({ message: `El campo ${element} no puede estar vacio` });
        }
      }
    }

    const repeatables = [
      "name",
      "lastName",
      "birthDate",
      "genre",
      "nationality",
      "province",
      "location",
      "address",
      "schooling",
      "profession",
      "howKnowGrooming",
      "howManyHours",
    ];

    const noRepeatables = [
      "document",
      "phone",
      "email",
      "facebook",
      "twitter",
      "instagram",
      "linkedIn"
    ]

    const promises = Object.keys(userRegister)
      .filter((key) => !repeatables.includes(key))
      .map((key) => userStatus.findOne({ [key]: userRegister[key] }).exec());
    const results = await Promise.all(promises);

    for (let i = 0; i < results.length; i++) {
      const duplicate = results[i];;
      if (duplicate) {
        return res.status(400).json({
          message: `El campo ${
            noRepeatables[i]
          } Ya se encuentra regisrtado`,
        });
      }
    }

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
      status: "pending",
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
