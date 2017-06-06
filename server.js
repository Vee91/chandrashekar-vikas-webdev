var app = require('./express');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(app.express.static(__dirname + '/public'));
app.get('/assignment/user/*', function(req,res){
    res.sendFile(__dirname + '/public/assignment/index.html');
});

require ("./test/app.js")(app);
require("./assignment/app");

var port = process.env.PORT || 3000;

app.listen(port);