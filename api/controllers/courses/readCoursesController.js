const courses = require("../../models/courses")

const handleCourses = async(req, res) =>{
    try {
        const userCoursesList =  await courses.find({})
        res.status(200).json(userCoursesList)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports = handleCourses