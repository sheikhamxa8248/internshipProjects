const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    netId: {
      type: String,
      required: true,
    },
    uin: {
      type: Number,
      required: true,
    },
    inst: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
