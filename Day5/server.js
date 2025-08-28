const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
    notes.push(req.body);
    res.send(notes);
})

app.get("/notes", (req, res) => {
    res.send(notes);
})

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.send("notes is successfully delete index");
})

app.listen(3000, () => {
    console.log("Hello Method post get delete ");
})