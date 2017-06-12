module.exports = function (websiteModel) {
    var model = {};
    var mongoose = require("mongoose");
    var PageSchema = require("./page.schema.server")();
    var pageModel = mongoose.model("pageModel", PageSchema);
    var factory = {
        createPage: createPage,
        findAllPagesForWebsite: findAllPagesForWebsite,
        findPageById: findPageById,
        updatePage: updatePage,
        deletePage: deletePage,
        addWidget: addWidget,
        deleteWidget: deleteWidget,
    }
    return factory;

    function findAllPagesForWebsite(websiteId) {
        return pageModel.find({
            _website: websiteId
        })
    }

    function createPage(websiteId, page) {
        page._website = websiteId;
        return pageModel.create(page)
            .then(function (page) {
                return websiteModel.addPage(websiteId, page._id)
            });
    }

    function findPageById(pageId) {
        return pageModel.findById(pageId);
    }

    function updatePage(pageId, page) {
        return pageModel.update(
            {
                _id: pageId
            },
            {
                name: page.name,
                title: page.title,
                description: page.description,

            }
        );
    }

    function deletePage(websiteId, pageId) {
        return pageModel.remove({
            _id: pageId
        }).then(function (status) {
            return websiteModel.deletePage(websiteId, websiteId)
        })
    }

    function addWidget(pageId, widgetId) {
        return pageModel
            .findById(pageId)
            .then(function (page) {
                page.widgets.push(widgetId);
                return page.save();
            });
    }

    function deleteWidget(pageId, widgetId) {
        return pageModel
            .findById(pageId)
            .then(function (page) {
                var index = page.widgets.indexOf(widgetId);
                page.widgets.splice(index, 1);
                return page.save();
            });
    }
};
