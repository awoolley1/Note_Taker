const http = require("http")
const express = require ("express")

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
        res.write("working here");
        res.end();
    }
}
)

const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on ${PORT}`))