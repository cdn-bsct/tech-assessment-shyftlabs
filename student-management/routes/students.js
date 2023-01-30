const express = require("express");
const router = express.Router();
const studentsCtrl = require("../controller/students");

//get students
router.get("/", studentsCtrl.getStudents);

module.exports = router;
