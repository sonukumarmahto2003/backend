const express = require("express");

const app = express();
const mongoose = require("mongoose");
const userModel = require("./src/model/user.model");

mongoose
    .connect(
        "mongodb+srv://sonukumarcs2003_db_user:vx0XcBgSRMlQ1Ja1@cluster0.qthbrss.mongodb.net/"
    )
    .then((res) => {
        console.log("mongodb connected");
    })
    .catch((err) => {
        console.log("err", err);
    })


    app.post("/create-user", async (req, res) => {
        try {
            let userObj = {
                name: "rahuel",
                age: 40,
                email: "rahul@gmail.com",
                password: "12345",
            }

            let newUser = await userModel.create({
                name: userObj.name,
                age: userObj.age,
                email: userObj.email,
                password: userObj.password,
            });
            console.log(newUser);

            res.send({ message: "user created", user: newUser});
        } catch (error) {
            console.log("error->", error);
        }
    })

app.listen(3000, () => {
    console.log("server start in port 3000");
})