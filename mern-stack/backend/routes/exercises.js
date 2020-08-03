const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.post("/add", async (req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  });
  try {
    await newExercise.save();
    res.json("Exercise added!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json("Exercise deleted!");
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);
    try {
      await exercise.save();
      res.json("Exercise updated!");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
