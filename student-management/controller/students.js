const Students = require("../models/Students");

module.exports = {
  getStudents,
  createStudents,
};

async function getStudents(req, res) {
  try {
    const allStudents = await Students.find({});
    res.status(200);
    res.json(allStudents);
  } catch (err) {
    res.status(400);
    res.json({ error: err });
  }
}

async function createStudents(req, res) {
  console.log(req.body);
  try {
    let data = await Students.createStudent(req);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err });
    console.log(err);
  }
}
