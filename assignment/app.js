var connectionString = 'mongodb://127.0.0.1:27017/webdev'; //local

if(process.env.MONGODB_USERNAME) {
    var username = process.env.MONGODB_USERNAME;
    var password = process.env.MONGODB_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds017248.mlab.com:17248/heroku_lbh4f8m5';
}

var mongoose = require("mongoose");
mongoose.connect(connectionString);

var model = require("./model/models.server.js");
require("./services/user.service.server.js")(model);
require("./services/website.service.server")(model);
require("./services/page.service.server")(model);
require("./services/widget.service.server")(model);
