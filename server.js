var app = require('./express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    // secret: process.env.SESSION_SECRET
    secret: 'this is the secret',
    resave: true,
    saveUninitialized: true
}));


// configure a public directory to host static content
app.use(app.express.static(__dirname + '/public'));
app.get('/assignment/ph/*', function (req, res) {
    res.sendFile(__dirname + '/public/assignment/index.html');
});

//require ("./test/app.js")(app);
require("./assignment/app");

var port = process.env.PORT || 3000;

app.listen(port);