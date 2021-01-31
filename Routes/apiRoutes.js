var notesData = require("../db/db.json");
const fs = require("fs");

const util = require("util");
//const writeFileAsync = util.promisify(fs.writeFile);
//const readFileAsync = util.promisify(fs.readFile);


module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });

  app.post("/api/notes", function (req, res) {
    console.log(req.body);
    notesData.push(req.body);
    console.log(notesData)
    fs.writeFileSync("./db/db.json", JSON.stringify(notesData))
    res.json(notesData)
  });
};
