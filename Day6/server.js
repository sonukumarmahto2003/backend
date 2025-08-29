const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.send("post is successfully");
})

app.get("/notes", (req, res) => {
    res.send(notes);
    console.log(notes);
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.send("notes is successfully delete index");
})

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.send("Updated in Successfully");
})

app.listen(3000, () => {
    console.log("Hello Method post get delete ");
})