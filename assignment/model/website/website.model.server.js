module.exports = function (userModel) {
    var mongoose = require("mongoose");
    var websiteSchema = require("./website.schema.server")();
    var websiteModel = mongoose.model("websiteModel", websiteSchema);

    var factory = {
        findAllWebsitesForUser: findAllWebsitesForUser,
        findWebsiteById: findWebsiteById,
        createWebsiteForUser: createWebsiteForUser,
        deleteWebsite: deleteWebsite,
        updateWebsite: updateWebsite,
        addPage: addPage,
        deletePage: deletePage,
    };
    return factory;

    function createWebsiteForUser(userId, website) {
        website._user = userId;
        return websiteModel.create(website)
            .then(function (website) {
                return userModel.addWebsite(userId, website._id)
            });
    }

    function findAllWebsitesForUser(userId) {
        return websiteModel.find({
            _user: userId
        });
    }

    function findWebsiteById(websiteId) {
        return websiteModel.findById(websiteId);
    }

    function updateWebsite(websiteId, website) {
        return websiteModel.update(
            {
                _id: websiteId
            },
            {
                name: website.name,
                description: website.description,
            }
        );
    }

    function deleteWebsite(userId, websiteId) {
        return websiteModel.remove({
            _id: websiteId
        }).then(function (status) {
            return userModel
                .deleteWebsite(userId, websiteId);
        })
    }

    function addPage(websiteId, pageId) {
        return websiteModel
            .findById(websiteId)
            .then(function (website) {
                website.pages.push(pageId);
                return website.save();
            });
    }

    function deletePage(websiteId, pageId) {
        return websiteModel
            .findById(websiteId)
            .then(function (website) {
                var index = website.pages.indexOf(pageId);
                website.pages.splice(index, 1);
                return website.save();
            });
    }
};
