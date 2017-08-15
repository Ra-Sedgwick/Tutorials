let Express = require('express');

let app = new Express();

app.get('/', function(request, result) {
    result.render('./../app/index.ejs', {});
})
.use(Express.static(__dirname + '/../.tmp'))
.listen(7777);


