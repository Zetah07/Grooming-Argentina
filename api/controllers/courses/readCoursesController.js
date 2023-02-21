const courses = require("../../models/courses")

const handleCourses = async(req, res) =>{
    const {order} = req.query
    const {title} = req.params
    if(!title){
        try {
            const userCoursesList =  await courses.find({})
            if (order) {
                if (order === "descending"){
                    const orderedUserCoursesList = userCoursesList.sort(function(a,b){
                        return new Date(b.createdAt) - new Date(a.createdAt)
                     })
                     return res.status(200).json(orderedUserCoursesList)
                }else if (order === "ascending"){
                    const orderedUserCoursesList = userCoursesList.sort(function(a,b){
                        return   new Date(a.createdAt) - new Date(b.createdAt)
                     })
                     return res.status(200).json(orderedUserCoursesList)
                }else{
                   return res.status(200).json(userCoursesList)
                }
            }
            return res.status(200).json(userCoursesList)
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }else{
        try {
            const userCourses=  await courses.findOne({title:title})
            if (userCourses === null)  return res.status(400).json({message: "curso no encontrado"})
            return res.status(200).json(userCourses)
        } catch (error) {
            return res.status(400).json({message:error.message})
        }
    }
}
module.exports = handleCourses