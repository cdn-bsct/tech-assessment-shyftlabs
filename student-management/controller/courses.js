const Courses = require("../models/Course");

module.exports = {
  getCourses,
  addCourse,
};

// retrieve all courses from the databases
async function getCourses(req, res) {
  try {
    const allCourses = await Courses.find({});
    res.status(200).json(allCourses);
  } catch (err) {
    res.status(400).json(err);
  }
}

// add new course into the database
async function addCourse(req, res) {
  try {
    let data = await Courses.createCourse(req);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
}
