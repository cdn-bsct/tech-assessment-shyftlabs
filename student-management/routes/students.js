const express = require("express");
const router = express.Router();
const studentsCtrl = require("../controller/students");

//get students
router.get("/", studentsCtrl.getStudents);

// create students
router.post("/create", studentsCtrl.createStudents);

module.exports = router;
