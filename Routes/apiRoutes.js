var notesData = require("../db/db.json");
const fs = require("fs");
const uuidv1 = require("uuid").v1;

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function (req, res) {
    const { title, text } = req.body;
    const newNote = { title, text, id: uuidv1() };
    notesData.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesData));
    res.json(notesData);
  });

  app.delete("/api/notes/:id", function (req, res) {
    var notesDataPostDelete = notesData.filter(({id}) => {
      return id !== req.params.id;
    }); 
    fs.writeFileSync("./db/db.json", JSON.stringify(notesDataPostDelete));
    res.json(notesDataPostDelete);
  });
};
