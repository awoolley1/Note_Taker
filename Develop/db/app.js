
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))

const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url ==='/'){
        res.write("working here");
        res.end();
    }
}
)