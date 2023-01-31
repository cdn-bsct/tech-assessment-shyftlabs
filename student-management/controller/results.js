const Result = require("../models/Results");
const Student = require("../models/Students");
const Course = require("../models/Course");

module.exports = {
  getResults,
  addResults,
};

async function getResults(req, res) {
  try {
    let results = await Result.find({});
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ Error: err });
    console.log(err);
  }
}

async function addResults(req, res) {
  let student = await Student.find({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  let course = await Course.find({
    name: req.body.course,
  });
  try {
    let newResult = await Result.create({
      student: student[0]._id,
      course: course[0]._id,
      grade: req.body.grade,
    });
    res.status(200).json(newResult);
  } catch (err) {
    res.status(400).json({ Error: err });
    console.log(err);
  }
}
