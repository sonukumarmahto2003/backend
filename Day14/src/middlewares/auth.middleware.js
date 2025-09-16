const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.token;

    if (!token)
      return res.status(404).json({
        message: "Token not found",
      });

    let decode = jwt.verify(token, process.env.JWT_SECRET);

    let user = await userModel.findById(decode.id);

    if (!user)
      return res.status(404).json({
        message: "User not found",
      });

    req.body = user;
    next();
  } catch (error) {
    console.log("Error in middleware->", error);
  }
};

module.exports = authMiddleware;