const mongoose  = require("mongoose");
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

const handleNews = async (req,res) => {
    const {title, description, img, link, category, provinceOrLocation} = req.body;
    if(!title || !description || !img || !category) return res.status(400).json({"message": "Required data is missing"});

    try {
        const newNews = new news({
            title: title,
            description: description,
            img: img,
            link: link,
            provinceOrLocation: provinceOrLocation
        });

        await newNews.save();

        res.status(201).json({"message": "The news is created"});
    } catch (error) {
        res.status(500).json({"message": error});
    }
};

//ID parser to objectID
const parseID = (id) => {
    return mongoose.Types.ObjectId(id);
}

const modifyNews = async (req, res) => {
    const { id } = req.params.id;
    const body = req.body;
    if(!id) return res.status(400).json({"message": "This news doesn't exist"});

    news.updateOne(
        {_id: parseID(id)},
        body,
        (err, docs) => {
            res.status(200).send({items: docs})
        }
    )
};

module.exports = {
    getNews,
    handleNews,
    modifyNews
};