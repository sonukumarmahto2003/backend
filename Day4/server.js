const express = require('express');

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("start server"); 
})