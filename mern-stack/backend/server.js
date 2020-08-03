const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

dotenv.config();

const app = express(); //creates the app
const port = process.env.PORT || 5000; //sets the port number

//middleware
app.use(cors());
app.use(express.json());

//connect to mongodb
const uri = process.env.ATLAS_URI; //database stored here
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//connect the server to the files and use them
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//starts and listens on the port number
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
