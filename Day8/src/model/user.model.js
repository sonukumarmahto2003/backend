const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    // email: {
    //     type: String,
    //     unique: true,
    //     required: true,
    // },
    password: String,
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;

