const course = require("../../models/courses")

const handleCoursesCreation = async (req, res) => {
    const { courseSent } = req.body
    console.log(courseSent)
    if (!courseSent) return res.status(400).json({ message: "Curso no enviado" })
    if (!courseSent.title || !courseSent.description || !courseSent.thumbnail || !courseSent.link) return res.status(400).json({ message: "Campos faltantes" })
    try {
        const duplicateCourse = await course.findOne({ link: courseSent.link }).exec();
        if (duplicateCourse) {
            return res.status(409).json({ message: "Ya esxiste un curso con ese link" })
        }
        const newCourse = await new course(courseSent)
        await newCourse.save()
        return res.status(200).json(newCourse);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
module.exports = handleCoursesCreation