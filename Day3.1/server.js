const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello API");
})

app.get("/Home", (req, res) => {
    res.send("Hello API Home");
})

app.listen(3000, () => {
    console.log("Hello Server");
})