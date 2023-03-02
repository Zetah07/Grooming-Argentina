const news = require("../../models/news");
const cloudinary = require("../../config/cloudinary");

const handleNews = async (req, res) => {
  const { title, description, link, category, provinceOrLocation } = req.body;
  
  if(!req.file) {
    return res.send("Por favor seleccione una imagen para subir");
  };

  if (!title || !description || !category) return res.status(400).json({ "message": "Hace falta rellenar algunos campos para crear la noticia" });


  try {

    // if (!req.user) {
    //   return res.status(401).json({ error: "debe iniciar sesión para crear una publicación" });
    // }

    const cloudinary_image = await cloudinary.uploader.upload(req.file.path, {
      folder: "NewsImages",
    });



    const newNews = new news({
      title: title,
      description: description,
      img: {
        public_id: cloudinary_image.public_id,
        url: cloudinary_image.secure_url
      },
      link: link,
      category: category,
      provinceOrLocation: provinceOrLocation
    });

    await newNews.save();

    res.status(201).json({ "message": "La noticia fue creada" });
  } catch (error) {
    res.status(500).json({ "message": error });
  }
};

module.exports = { handleNews };