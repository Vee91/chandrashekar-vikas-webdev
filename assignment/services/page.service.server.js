module.exports = function (model) {
    var app = require('../../express');

    var pageModel = model.pageModel;

    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/website/:websiteId/page/:pageId', deletePage);

    function findAllPagesForWebsite(req, res) {
        var webId = req.params.websiteId;
        pageModel.findAllPagesForWebsite(webId)
            .then(function (result) {
                    res.send(result);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            );
    }

    function createPage(req, res) {
        var page = req.body;
        var webId = req.params.websiteId;
        pageModel.createPage(webId, page)
            .then(function (status) {
                    if (status) {
                        findAllPagesForWebsite(req, res);
                    }
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            );
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        pageModel.findPageById(pageId)
            .then(function (page) {
                    res.send(page);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            );
    }

    function updatePage(req, res) {
        var page = req.body;
        var pageId = req.params.pageId;
        pageModel.updatePage(pageId, page)
            .then(function (success) {
                    res.sendStatus(200);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        var webId = req.params.websiteId;
        pageModel.deletePage(webId, pageId)
            .then(function (status) {
                    res.send(status);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }
}