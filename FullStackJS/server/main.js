var express = require('express');

var app = new express();

app.get('/', function(request, result) {
    result.render('./../app/index.ejs', {});
})
.listen(7777);