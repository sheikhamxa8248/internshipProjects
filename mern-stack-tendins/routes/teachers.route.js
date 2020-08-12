const router = require("express").Router();
let Teacher = require("../models/teacher.model");

//Get request to get all the teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Add request to add a new teacher
router.post("/add", async (req, res) => {
  const newTeacher = new Teacher({
    lastname: req.body.lastname,
    subject: req.body.subject,
    crn: Number(req.body.crn),
  });
  try {
    await newTeacher.save();
    res.json("Teacher added!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Get request to get a specific student
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

//Delete request to delete a specific teacher
router.delete("/:id", async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json("Teacher deleted!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
