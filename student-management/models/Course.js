const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coursesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

coursesSchema.statics.createCourse = async function (req) {
  let { name } = req.body;
  this.create({
    name: name,
  });
  return "Course created";
};

module.exports = mongoose.model("Courses", coursesSchema);
