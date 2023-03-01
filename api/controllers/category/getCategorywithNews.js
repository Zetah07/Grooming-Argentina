const category = require("../../models/category");

const getCategoriesAndNews = async (req, res) => {
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
    if(!result) return res.status(400).json({"message": "Error al traer las categorias"});
    res.status(400).json({"categories": result});
};

module.exports = { getCategoriesAndNews };