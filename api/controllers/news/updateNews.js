const mongoose  = require("mongoose");
const news = require("../../models/news");

//ID parser to objectID
const parseID = (id) => {
    return mongoose.Types.ObjectId(id);
}

const modifyNews = async (req, res) => {
    const { id } = req.params.id;
    const body = req.body;
    try {
        news.updateOne(
            {_id: parseID(id)},
            body,
            (err, docs) => {
                res.status(200).send({items: docs})
            }
        )
    } catch (error) {
        res.status(400).json({"message": error})
    }

};

module.exports = { modifyNews }