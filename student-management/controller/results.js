const Result = require("../models/Results");
const Student = require("../models/Students");
const Course = require("../models/Course");

module.exports = {
  getResults,
  addResults,
};

async function getResults(req, res) {
  try {
    let results = await Result.find({}).populate("student").populate("course");
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ Error: err });
    console.log(err);
  }
}

async function addResults(req, res) {
  try {
    let student = await Student.findById(req.body.student);
    let course = await Course.findById(req.body.course);
    let newResult = await Result.create({
      student: student._id,
      course: course._id,
      grade: req.body.grade,
    });
    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json(err);
  }
}
