var express = require("express");
var http = require('http')
var app = express();

app.use(express.static('./public'));

app.listen(process.env.PORT || 8001);

http.createServer(app).listen(8001, () => {
    console.log('Server started');
});