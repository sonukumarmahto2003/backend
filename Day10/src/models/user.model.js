const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
    minlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

let userModel = mongoose.model("User", userSchema);

module.exports = userModel;