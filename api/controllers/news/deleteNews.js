const news = require("../../models/news");
const ObjectID = require('mongoose').Types.ObjectId;

const deleteNews = async (req, res) => {
    const { id } = req.params;

    if (!ObjectID.isValid(id)) return res.status(400).json({ message: "ID no válida" });

    try {
        news.deleteOne(
            { _id: id },
            (err, docs) => {
                if (err) {
                    res.status(400).json({ "error": err });
                } else {
                    if (docs.deletedCount === 1) {
                        res.status(200).json({ "message": "Noticia eliminada correctamente" });
                    } else {
                        res.status(400).json({ "message": "No se pudo eliminar la noticia" });
                    }
                }
            }
        )
    } catch (error) {
        res.status(500).json({ "Error": error });
    }
};

module.exports = { deleteNews };