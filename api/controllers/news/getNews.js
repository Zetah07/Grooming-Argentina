const news = require("../../models/news");

const getNews = async (req, res) => {
    try {
        news.find((err, docs) => {
            res.status(200).json({docs});
        })
    } catch (error) {
        res.status(500).json({"message": error});
    }
};

module.exports = { getNews };