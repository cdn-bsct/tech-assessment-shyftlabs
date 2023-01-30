const Students = require("../models/Students");

module.exports = {
  getStudents,
};

async function getStudents(req, res) {
  try {
    console.log("hello");
    const allStudents = await Students.find({});
    req.status(200);
    req.json(allStudents);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ error: err });
  }
}
