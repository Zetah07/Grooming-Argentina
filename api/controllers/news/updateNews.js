const mongoose  = require("mongoose");
const news = require("../../models/news");

const modifyNews = async (req, res) => {
    const { id } = req.params;
    // const {title, description, img, category, link, provinceOrLocation} = req.body;
    const body = req.body;

    news.updateOne(
        {_id: id},
        // {$set: {title: title, description: description, img: img, category: category, link: link, provinceOrLocation: provinceOrLocation}},
        {$set: body},
        (err, docs) => {
            if(err) {
                if(err.path === "_id") {
                    res.status(400).json({"error": "The news doesn´t exist"})
                } else {
                    res.status(400).json({"error": err});
                }
            } else {
                if(docs.matchedCount === 1) {
                    res.status(200).json({"message": "Updated :)"});
                } else {
                    res.status(400).json({"message": "failed to update :("})
                }
            }
        }
    )
};

module.exports = { modifyNews };