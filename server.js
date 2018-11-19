const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");

const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb://localhost/Projects", {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("db is listening"));

const app = express();

const project = require("./routes/projectRoutes");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/project", project);

app.listen(port, function () {
  console.log("listening on port: ", port);
});