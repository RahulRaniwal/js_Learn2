const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { dirname } = require("path");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  let fName = req.body.firstName;
  let lName = req.body.lastName;
  let email = req.body.email;
  console.log(fName, lName, email);
});

app.listen(3000, function () {
  console.log("server is running at port 3000");
});
