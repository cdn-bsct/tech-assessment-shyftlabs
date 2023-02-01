const Students = require("../models/Students");

module.exports = {
  getStudents,
  createStudents,
};

async function getStudents(req, res) {
  try {
    const allStudents = await Students.find({});
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function createStudents(req, res) {
  try {
    let data = await Students.createStudent(req);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
}
