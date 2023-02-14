const Result = require("../models/Results");
const Student = require("../models/Students");
const Course = require("../models/Course");

module.exports = {
  getResults,
  addResults,
};

// retrieve all data from database and populate reference schemas
async function getResults(req, res) {
  try {
    let results = await Result.find({}).populate("student").populate("course");
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json({ Error: err });
    console.log(err);
  }
}

// add new result into database
async function addResults(req, res) {
  try {
    let student = await Student.findById(req.body.student);
    let course = await Course.findById(req.body.course);
    let existingResult = await Result.find({
      student: student,
      course: course,
    });

    if (existingResult.length === 0) {
      let newResult = await Result.create({
        student: student._id,
        course: course._id,
        grade: req.body.grade,
      });
      let returnMsg = "Student Successfully Added";
      res.status(200).json(returnMsg);
    } else {
      let returnMsg = "This student already has a grade for this class";
      res.status(200).json(returnMsg);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

//in the results
//only add unique results.
// no duplicates.
