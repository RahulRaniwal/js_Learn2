const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Home page" });
});

app.get("/users", (req, res) => {
  res.json({ message: "Get all the users" });
});

app.get("/users/:id", (req, res) => {
  res.json({ message: `Get the user with ID ${req.params.id}` });
});

app.post("/users/", (req, res) => {
  res.json({ message: "Create new user." });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: `Update user with the ID ${req.params.id}` });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: `Delete user with the ID ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port: ${PORT}`);
});
