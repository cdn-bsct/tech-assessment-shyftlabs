const Students = require("../models/Students");

module.exports = {
  getStudents,
  createStudents,
};

// retreive all students from the database
async function getStudents(req, res) {
  try {
    const allStudents = await Students.find({});
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(400).json(err);
  }
}

// add a new student into the database
async function createStudents(req, res) {
  try {
    let data = await Students.createStudent(req);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
}
