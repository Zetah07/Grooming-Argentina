const news = require("../../models/news");
const ObjectID = require('mongoose').Types.ObjectId;
const cloudinary = require("../../config/cloudinary");

const modifyNews = async (req, res) => {
    const { id } = req.params;
    const {title, description, category, link, provinceOrLocation} = req.body;
    

    if (!ObjectID.isValid(id)) return res.status(400).json({ message: "ID no válida" });

    try {
        if(req.file) {
            const cloudinary_image = await cloudinary.uploader.upload(req.file.path, {
                folder: "NewsImages",
            });
            news.updateOne(
                {_id: id},
                // {$set: {title: title, description: description, img: img, category: category, link: link, provinceOrLocation: provinceOrLocation}},
                {
                    title: title,
                    description: description,
                    img: {
                        public_id: cloudinary_image.public_id,
                        url: cloudinary_image.secure_url
                    },
                    link: link,
                    category: category,
                    provinceOrLocation: provinceOrLocation
                },
                (err, docs) => {
                    if(err) {
                        if(err.path === "_id") {
                            res.status(400).json({"error": "La noticia no existe"})
                        } else {
                            res.status(400).json({"error": err});
                        }
                    } else {
                        if(docs.matchedCount === 1) {
                            res.status(200).json({"message": "Noticia actualizada"});
                        } else {
                            res.status(400).json({"message": "No se pudo actualizar la noticia"});
                        }
                    }
                }
            )
        } else {
            news.updateOne(
                {_id: id},
                {
                    title: title,
                    description: description,
                    link: link,
                    category: category,
                    provinceOrLocation: provinceOrLocation
                },
                (err, docs) => {
                    if(err) {
                        if(err.path === "_id") {
                            res.status(400).json({"error": "La noticia no existe"})
                        } else {
                            res.status(400).json({"error": err});
                        }
                    } else {
                        if(docs.matchedCount === 1) {
                            res.status(200).json({"message": "Noticia actualizada"});
                        } else {
                            res.status(400).json({"message": "No se pudo actualizar la noticia"});
                        }
                    }
                }
            )
        }
    } catch (error) {
        res.status(500).json({"Error": error});
    }

};

module.exports = { modifyNews };