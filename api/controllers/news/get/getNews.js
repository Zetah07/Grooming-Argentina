const news = require("../../../models/news");

const getNews = async (req, res) => {
    //http://localhost:3500/news?categoria=test&provinciaOLocacion=Paraiso+raro
    const { categoria, provinciaOLocacion } = req.query;
    let filteredNews;

    try {
        if(categoria && provinciaOLocacion) {
            filteredNews = await news.find({category: categoria, provinceOrLocation: provinciaOLocacion}).exec();
            res.status(200).json(filteredNews);
        }
        else if(categoria) {
            filteredNews = await news.find({category: categoria}).exec();
            res.status(200).json(filteredNews);
        }
        else if(provinciaOLocacion) {
            filteredNews = await news.find({provinceOrLocation: provinciaOLocacion}).exec();
            res.status(200).json(filteredNews);
        } else {
            filteredNews = await news.find({});
            res.status(200).json(filteredNews);
        }
    } catch (error) {
        res.status(500).json({"message": error});
    }
};

module.exports = { getNews };