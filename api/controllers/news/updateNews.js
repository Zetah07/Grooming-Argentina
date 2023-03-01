const news = require("../../models/news");
const ObjectID = require('mongoose').Types.ObjectId;

const modifyNews = async (req, res) => {
    const { id } = req.params;
    // const {title, description, img, category, link, provinceOrLocation} = req.body;
    const body = req.body;

    if (!ObjectID.isValid(id)) return res.status(400).json({ message: "ID no válida" });

    try {
        news.updateOne(
            {_id: id},
            // {$set: {title: title, description: description, img: img, category: category, link: link, provinceOrLocation: provinceOrLocation}},
            {$set: body},
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
                        res.status(400).json({"message": "No se puedo actualizar la noticia"});
                    }
                }
            }
        )
    } catch (error) {
        res.status(500).json({"message": error});
    };
};

module.exports = { modifyNews };