const Students = require("../models/Students");

module.exports = {
  allStudents,
};

async function allStudents(req, res) {
  try {
    const allStudents = await Students.find({});
    req.status(200);
    req.json(allStudents);
  } catch (err) {
    res.status(400);
    res.json({ error: err });
  }
}
