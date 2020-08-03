const router = require("express").Router();
let User = require("../models/user.model");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
router.post("/add", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
  });
  try {
    await newUser.save();
    res.json("User added!");
  } catch (err) {
    res.status(400).json("Error:" + err);
  }
});

module.exports = router;
