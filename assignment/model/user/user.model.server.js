module.exports = function () {
    var mongoose = require("mongoose");
    var userSchema = require("./user.schema.server")();
    var userModel = mongoose.model("UserModel", userSchema);

    var factory = {
        createUser: createUser,
        findUserById: findUserById,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        updateUser: updateUser,
        addWebsite: addWebsite,
        deleteWebsite: deleteWebsite,
        findUserByFacebookId: findUserByFacebookId,
    };
    return factory;

    function createUser(user) {
        user.roles = ['USER'];
        return userModel.create(user);
    }

    function findUserById(userid) {
        return userModel.findById(userid);
    }

    function updateUser(userId, user) {
        return userModel.update(
            {_id: userId},
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        );
    }

    function findUserByCredentials(username, password) {
        return userModel.findOne({
            username: username,
            password: password
        });
    }

    function findUserByUsername(username) {
        return userModel.findOne({
            username: username
        });
    }

    function deleteUser(userId) {
        return userModel.remove({
            _id: userId
        });
    }

    function addWebsite(userId, websiteId) {
        return userModel
            .findById(userId)
            .then(function (user) {
                user.websites.push(websiteId);
                return user.save();
            });
    }

    function deleteWebsite(userId, websiteId) {
        return userModel
            .findById(userId)
            .then(function (user) {
                var index = user.websites.indexOf(websiteId);
                user.websites.splice(index, 1);
                return user.save();
            });
    }

    function findUserByFacebookId(facebookId) {
        return userModel.findOne({'facebook.id': facebookId});
    }
}