const category = require("../../models/category");
const ObjectID = require('mongoose').Types.ObjectId;

const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if (!ObjectID.isValid(id)) return res.status(400).json({ message: "ID no válida" });

    category.deleteOne(
        {_id: id},
        (err, docs) => {
            if(err) {
                res.status(400).json({"error": err});
            } else {
                if(docs.deletedCount === 1) {
                    res.status(200).json({"message": "Categoria eliminada correctamente"});
                } else {
                    res.status(400).json({"message": "No se pudo eliminar la categoria"});
                }
            }
        }
    );
};

module.exports = { deleteCategory };