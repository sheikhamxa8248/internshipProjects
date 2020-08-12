const router = require("express").Router();
let Student = require("../models/student.model");

//Get request to get all the students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Post request to add new students
router.post("/add", async (req, res) => {
  const newStudent = new Student({
    fullname: req.body.fullname,
    netId: req.body.netId,
    uin: Number(req.body.uin),
    inst: req.body.inst,
  });
  try {
    await newStudent.save();
    res.json("Student added!");
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

//Get request to get a specific student
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//delete request to delete a specific student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json("Student deleted!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Post request to update a specific student
router.post("/update/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    student.fullname = req.body.fullname;
    student.netId = req.body.netId;
    student.uin = Number(req.body.uin);
    student.inst = req.body.inst;
    try {
      await student.save();
      res.json("Student updated!");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
