const courses = require("../../models/courses");

const handleCourses = async (req, res) => {
  const { order, id, page, perPage } = req.query;
  const { title } = req.params;

  const pages = (arr, perPage=6, page=1) => {
    const numPages = Math.ceil(arr.length / perPage);
    if (numPages < page) page = numPages;
    const pagedArr = arr.slice(perPage * (page - 1), perPage * page);
    return {maxPage: numPages,  pagedArr};
  };


  if (id) {
    try {
      const searchCourse = await courses.findOne({ _id: id });
      if (!searchCourse)
        return res
          .status(400)
          .json({ message: "No se encontro curso con el ID" });
      return res.status(200).json(searchCourse);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else if (!title) {
    try {
      const userCoursesList = await courses.find({});
      if (order) {
        if (order === "descending") {
          const orderedUserCoursesList = userCoursesList.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          pagedCourses = pages(orderedUserCoursesList, perPage, page);
          return res.status(200).json(pagedCourses);
        } else if (order === "ascending") {
          const orderedUserCoursesList = userCoursesList.sort(function (a, b) {
            return new Date(a.createdAt) - new Date(b.createdAt);
          });
          pagedCourses = pages(orderedUserCoursesList, perPage, page);
          return res.status(200).json(pagedCourses);
        } else {
          return res.status(200).json(pages(userCoursesList, perPage, page));
        }
      }
      return res.status(200).json(pages(userCoursesList, perPage, page));
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } else {
    try {
      const userCourses = await courses.findOne({ title: title });
      if (userCourses === null)
        return res.status(400).json({ message: "curso no encontrado" });
      return res.status(200).json(userCourses);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};
module.exports = handleCourses;
