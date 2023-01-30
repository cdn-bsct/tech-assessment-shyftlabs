const Courses = require("../models/Course");

module.exports = {
  getCourses,
  addCourse,
};

async function getCourses(req, res) {
  try {
    console.log("hello");
    const allCourses = await Courses.find({});
    res.status(200).json(allCourses);
  } catch (err) {
    res.status(400).json({ Error: err });
  }
}

async function addCourse(req, res) {
  try {
    let data = await Courses.createCourse(req);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ Error: err });
    console.log(err);
  }
}
