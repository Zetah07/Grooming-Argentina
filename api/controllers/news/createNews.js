const news = require("../../models/news");

const handleNews = async (req,res) => {
    const {title, description, img, link, category, provinceOrLocation} = req.body;
    if(!title || !description || !img || !category) return res.status(400).json({"message": "Required data is missing"});

    try {
        const newNews = new news({
            title: title,
            description: description,
            img: img,
            link: link,
            category: category,
            provinceOrLocation: provinceOrLocation
        });

        await newNews.save();

        res.status(201).json({"message": "The news is created"});
    } catch (error) {
        res.status(500).json({"message": error});
    }
};

module.exports = { handleNews };