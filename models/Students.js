const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    familyName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

studentsSchema.statics.createStudent = async function (req) {
  let { firstName, familyName, dateOfBirth } = req.body;
  this.create({
    firstName: firstName,
    familyName: familyName,
    dateOfBirth: dateOfBirth,
  });
  return "Student created";
};

module.exports = mongoose.model("Students", studentsSchema);
