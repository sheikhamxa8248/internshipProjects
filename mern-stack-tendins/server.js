//imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TeachersRouter = require("./routes/teachers.route");
const StudentsRouter = require("./routes/students.route");
const path = require("path");

dotenv.config();

const app = express(); //creates the app
const PORT = process.env.PORT || 5000; //sets the port number

//middleware
app.use(cors());
app.use(express.json());

//connect to mongodb
const uri = process.env.ATLAS_URI; //database stored here
mongoose.connect(process.env.MONGODB_URI || uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//connect the server to the files and use them
app.use("/teachers", TeachersRouter);
app.use("/students", StudentsRouter);

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set a static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

//starts and listens on the port number
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
