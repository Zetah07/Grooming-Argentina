const category = require("../../models/category");

const getCategoriesAndNews = async (req, res) => {
    try {
        const result = await category.aggregate(
            [
                {
                    $lookup:
                    {
                        from: "news",
                        let: { alliasCategory: "$name"},
                        pipeline: [
                            {
                                $match:{
                                    $expr:{
                                        $in: ["$$alliasCategory", "$category"]
                                    }
                                }
                            }
                        ],
                        as: 'NewsList'
                    }
                }
            ]
        );

        res.status(400).json({"categories": result});
    } catch (error) {
        res.status(500).json({"message": error});
    } 
};

module.exports = { getCategoriesAndNews };