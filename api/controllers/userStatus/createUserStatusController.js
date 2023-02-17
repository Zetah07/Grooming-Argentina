const userStatus = require("../../models/userStatus");
const user = require("../../models/user");


const handleUserStatusCreation = async (req, res) => {
  try {
    const { userRegister } = req.body;
    //pendiente de CV Y DocumentoAdj

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

    const promises = Object.keys(userRegister)
      .filter(key => !repeatables.includes(key))
      .map(key => userStatus.findOne({ [key]: userRegister[key] }).exec());

    const results = await Promise.all(promises);

    for (let i = 0; i < results.length; i++) {
      const duplicate = results[i];
      if (duplicate) {
        return res
          .status(400)
          .json({ message: `El campo ${Object.keys(userRegister)[i]} Ya se encuentra regisrtado` });
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
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = handleUserStatusCreation;