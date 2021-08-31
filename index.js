var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("Hello Digital Ocean");
});

app.listen(3003, () => {
    console.log("Magic is happening on port 3003!");
});
