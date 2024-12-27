const express = require("express");
const router = express.Router();
const {getAllUsers , getUserById , createUser} = require("../controllers/user.controller");

// get all the user list
router.get("/", getAllUsers);

// get user by id
router.get("/:id", getUserById);

// create user
router.post("/", createUser);

// edit user by id
router.patch("/:id", (req, res) => {
});

// delete user by id
router.delete("/:id", (req, res) => {
});

module.exports = router;
