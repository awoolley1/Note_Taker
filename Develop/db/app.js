const express = require ("express");
const app = express();

const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
        res.write("working here");
        res.end();
    }
}
)



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))