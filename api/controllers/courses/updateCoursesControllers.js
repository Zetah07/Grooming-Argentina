const course = require("../../models/courses");
const ObjectId = require('mongoose').Types.ObjectId;

const handleCoursesUpdate = async (req, res) => {
  const { id } = req.query;
  const {field,newValue} = req.body;
  if (!id) return res.status(400).json({ message: "Id no recibida" });
  if (!ObjectId.isValid(id)) return res.status(400).json({ message: "Id no valida" });
  if(!field || !newValue) return res.status(400).json({ message: "parametros no recibidos" });
  try {
    const courseToModify  = await course.findById(id).exec()
    if (!courseToModify) return res.status(400).json({ message: "Id no encontrada" });
    courseToModify[field] = newValue
    await courseToModify.save()
    return res.status(200).json( courseToModify );
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = handleCoursesUpdate;
