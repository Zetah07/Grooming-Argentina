const { Router } = require("express");
const handleCoursesCreation = require("../../controllers/courses/createCoursesController");
const handleCourses = require("../../controllers/courses/readCoursesController");
const handleCoursesUpdate = require("../../controllers/courses/updateCoursesControllers");
const router = Router();

router.get("/:title" , handleCourses)
router.get("/" , handleCourses)
router.post("/", handleCoursesCreation);
router.put("/", handleCoursesUpdate);

module.exports = router
