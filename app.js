var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('Heloo world');
});

app.listen(3002, function() {
    console.log('Example app listening at posrt 3002');
})