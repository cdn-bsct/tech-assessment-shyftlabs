const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Students",
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Courses",
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Results", resultsSchema);
