var mongoose = require("mongoose");
var connectionString = 'mongodb://localhost/webdev';

if(process.env.MONGODB_USERNAME) {
    var username = process.env.MONGODB_USERNAME;
    var password = process.env.MONGODB_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds017248.mlab.com:17248/heroku_lbh4f8m5';
}

mongoose.connect(connectionString);
var userModel = require("./user/user.model.server")();
var websiteModel = require("./website/website.model.server")(userModel);
var pageModel = require("./page/page.model.server")(websiteModel);
var widgetModel = require("./widget/widget.model.server")(pageModel);
var model = {
    userModel: userModel,
    websiteModel: websiteModel,
    pageModel: pageModel,
    widgetModel: widgetModel
};

module.exports = model;
