module.exports = function () {
    var mongoose = require("mongoose");

    var WebsiteSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "UserModel"},
        name: String,
        description: String,
        pages: [{type: mongoose.Schema.Types.ObjectId, ref: "pageModel"}],
        dateCreated: {type: Date, default: Date.now},
    }, {collection: "website"});

    return WebsiteSchema;
};