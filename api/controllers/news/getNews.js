const news = require("../../models/news");

const getNews = async (req, res) => {
    //http://localhost:3500/news?categoria=test&provinciaOLocacion=Paraiso+raro
    const { categoria, provinciaOLocacion, id, name, page = 1, limit = 5 } = req.query;
    let filteredNews;

    const options = {
        page: page,
        limit: limit,
        sort: { createdAt: -1 },
    };

    try {
        if (categoria && provinciaOLocacion) {
            filteredNews = await news.paginate({ category: categoria, provinceOrLocation: provinciaOLocacion }, options);
            res.status(200).json(filteredNews);
        }
        else if (categoria) {
            filteredNews = await news.paginate({ category: categoria }, options);
            res.status(200).json(filteredNews);
        }
        else if (provinciaOLocacion) {
            filteredNews = await news.paginate({ provinceOrLocation: provinciaOLocacion }, options);
            res.status(200).json(filteredNews);
        }
        else if (id) {
            filteredNews = await news.findById(id).exec();
            res.status(200).json(filteredNews);
        }
        else if (name) {
            const regex = new RegExp(name, "i");
            filteredNews = await news.paginate({ title: { $regex: regex } }, options);
            res.status(200).json(filteredNews);
        } else {
            filteredNews = await news.paginate({}, {options, sort:{createdAt: -1}});
            res.status(200).json(filteredNews);
        }
    } catch (error) {
        res.status(500).json({ "message": error });
    }
};

module.exports = { getNews };