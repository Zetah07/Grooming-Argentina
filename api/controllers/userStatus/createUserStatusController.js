const userStatus = require("../../models/userStatus");
const user = require("../../models/user");
const cloudinary = require("../../config/cloudinary");
const firebase = require("firebase/app");
const firebaseConfig = require("../../config/firebaseConfig");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
firebase.initializeApp(firebaseConfig);
const storage = getStorage();

const handleUserStatusCreation = async (req, res) => {
  try {
    const { CV, adjDocument } = req.files;
    const userRegister = JSON.parse(req.body["userRegister"]);
    if (!CV || !adjDocument)
      return res
        .status(400)
        .json({ message: `No se resibió CV y/o Documento` });
    if (!CV.name.includes(".pdf") || !adjDocument.name.includes(".pdf"))
      return res
        .status(400)
        .json({ message: `Los archivos deben ser tipo PDF` });

    for (const key in userRegister) {
      if (key !== "howManyHours" && key !== "whoGroominPerson") {
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
          message: `El campo ${noRepeatables[i]} Ya se encuentra registrado`,
        });
      }
    }
    let cvURL;
    let dniURL;
    const storageRef = ref(
      storage,
      "/CV/" + `${userRegister.document}` + ".pdf"
    );
    await uploadBytes(storageRef, CV.data).then(async (snapshot) => {
      await getDownloadURL(storageRef).then((url) => {
        cvURL = url;
      });
    });

    const storageRef2 = ref(
      storage,
      "/DNI/" + `${userRegister.document}` + ".pdf"
    );
    await uploadBytes(storageRef2, adjDocument.data).then(async (snapshot) => {
      await getDownloadURL(storageRef2).then((url) => {
        dniURL = url;
      });
    });
    const userStatusCorrection = {
      ...userRegister,
      status: "pendiente",
      adjDocument: dniURL,
      CV: cvURL,
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
