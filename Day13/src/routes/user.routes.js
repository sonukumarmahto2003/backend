const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/home", async (req, res) => {
  try {
    let token = req.cookies.token;
    if (!token)
      return res.status(404).json({
        message: "Token not found",
      });

    let decode = jwt.verify(token, process.env.JWT_SECRET);

    let user = await userModel.findById(decode.id);

    return res.send({ message: "ok", user: user });
  } catch (error) {
    console.log("error in home->", error);
  }
});

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

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

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

    if (!comparePass) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ id: checkUser[0]._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);

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