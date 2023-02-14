const express = require("express");
const router = express.Router();
const courseCtrl = require("../controller/courses");

//get all courses
router.get("/", courseCtrl.getCourses);

//create courses
router.post("/create", courseCtrl.addCourse);

module.exports = router;
