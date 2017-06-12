var mongoose = require("mongoose");
var connectionString = 'mongodb://localhost/webdev';

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
