const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    let { name, email, password, mobile } = req.body;

    let hashedPass = await bcrypt.hash(password, 11);

    let newUser = await userModel.create({
      name,
      email,
      mobile,
      password: hashedPass,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    let checkUser = await userModel.find({ email });
    console.log(checkUser);

    let comparePass = await bcrypt.compare(password, checkUser[0].password);

    // if (checkUser[0].password != comparePass) {
    //   return res.send("invalid credentials");
    // }

    if (!comparePass) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    return res.status(200).json({
      message: "user logged in ",
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;