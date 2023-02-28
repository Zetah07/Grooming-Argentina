const category = require("../../models/category");

const handleCreateCategory = async (req, res) => {
    const { name } = req.body;
    if(!name) return res.status(400).json({ "message": "La categoria necesita un nombre para ser creada"});

    try {
        const newCategory = new category({
           name: name 
        });

        await newCategory.save();

        res.status(201).json({"message":"La categoria fue creada"});
    } catch (error) {
        res.status(500).json({"message": error});
    }
};

module.exports= { handleCreateCategory };