const express = require("express");
const userModel = require("../models/user.model");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let { name, email, password, mobile } = req.body;

    let newUser = await userModel.create({
      name,
      email,
      mobile,
      password,
    });

    return res.send(newUser);
  } catch (error) {
    console.log("error in registration", error);
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let checkUser = await userModel.find({ email });
    console.log(checkUser);

    if (checkUser[0].password != password) {
      return res.send("invalid credentials");
    }

  } catch (error) {
    console.log("error in login", error);
  }
});

module.exports = router;