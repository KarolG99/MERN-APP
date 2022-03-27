const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const exercisesRouter = require("./routes/exercises.js");
const usersRouter = require("./routes/users.js");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection estabilished successfully");
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
