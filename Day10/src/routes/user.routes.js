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

module.exports = router;