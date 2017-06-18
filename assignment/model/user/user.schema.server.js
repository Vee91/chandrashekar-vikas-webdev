module.exports = function () {
    var mongoose = require("mongoose");
    var UserSchema = mongoose.Schema({
        username: {type: String, required: true, unique: true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: "websiteModel"}],
        dateCreated: {type: Date, default: Date.now},
        facebook: {
            id:    String,
            token: String
        }
    }, {collection: "user"});
    return UserSchema;
};