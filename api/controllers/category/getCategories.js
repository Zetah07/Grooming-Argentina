const category = require("../../models/category");

const getCategories = async (req, res) => {
    try {
        const categories = await category.find({});
        res.status(200).json({"categories": categories});
    } catch (error) {
        res.status(500).json({"message": error});
    }
};

module.exports = { getCategories };