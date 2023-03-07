const news = require("../../models/news");
const cloudinary = require("../../config/cloudinary");

const handleNews = async (req, res) => {

  const noticiaNueva = JSON.parse(req.body["CreateNew"]);

  if(!req.file) {
    return res.send("Por favor seleccione una imagen para subir");
  };

  try {

    if (!req.user) {
      return res.status(401).json({ error: "debe iniciar sesión para crear una publicación" });
    }

    for (const key in noticiaNueva) {
      if (key !== "link" && key !=="provinceOrLocation") {
        const element = noticiaNueva[key];
        if (!element) {
          return res
            .status(400)
            .json({ message: `El campo ${key} no puede estar vacio` });
        }
      }
    }

    const cloudinary_image = await cloudinary.uploader.upload(req.file.path, {
      folder: "NewsImages",
    });

    const newNews = new news({
      ...noticiaNueva,
      img: {
        public_id: cloudinary_image.public_id,
        url: cloudinary_image.secure_url
      }
    });

    await newNews.save();

    res.status(201).json({ "message":  `La noticia "${newNews.title}" fue creada` });
  } catch (error) {
    res.status(500).json({ "message": error });
  }
};

module.exports = { handleNews };