var notesData = require("../db/db.json");
const fs = require("fs");
var uuid = require("uuid");

const util = require("util");
//const writeFileAsync = util.promisify(fs.writeFile);
//const readFileAsync = util.promisify(fs.readFile);


module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function (req, res) {
    notesData.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesData))
    res.json(notesData)
  });

  app.delete("/api/notes/:id", function (req, res) {
      res.send
  })


};
