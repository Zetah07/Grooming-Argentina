const userStatus = require("../../models/userStatus");

const handleUserStatusCreation = async (req, res) => {
  const { userRegister } = req.body;
  //pendiente de CV Y DocumentoAdj

  for (const key in userRegister) {
    if (key !== "howManyHours") {
      const element = userRegister[key];
      if (!element) {
        res
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

  for (const key in userRegister) {
    if (!repeatables.includes(key)) {
      //Posbile optimizacion con un promise all
      const duplicate = await userStatus
        .findOne({ [key]: userRegister[key] })
        .exec();
      if (duplicate) {
        return res
          .status(400)
          .json({ message: `El campo ${key} Ya se encuentra regisrtado` });
      }
    }
  }
  //revisar el front con que formato va a enviar la fecha
  const brithDate = new Date(userRegister.brithDate);
  const userStatusCorrection = {
    ...userRegister,
    status: "pending",
    adjDocument: "placeholder",
    CV: "placeholder",
    brithDate: brithDate,
  };
  const newUserStatus = new userStatus(userStatusCorrection);
  await newUserStatus.save();

  res.status(200).json(newUserStatus);
};

module.exports = handleUserStatusCreation;
