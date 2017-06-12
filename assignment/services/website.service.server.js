module.exports = function (model) {
    var app = require('../../express');

    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/user/:userId/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/user/:userId/website/:websiteId', deleteWebsite);

    var websiteModel = model.websiteModel;

    function createWebsite(req, res) {
        var website = req.body;
        var userId = req.params.userId;
        websiteModel.createWebsiteForUser(userId, website)
            .then(function (website) {
                if (website) {
                    findAllWebsitesForUser(req, res);
                }
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;
        websiteModel.findAllWebsitesForUser(userId)
            .then(function (websites) {
                    if (websites) {
                        res.send(websites);
                    }
                    else {
                        res.send('NotFound');
                    }
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }

    function findWebsiteById(req, res) {
        var webId = req.params.websiteId;
        return websiteModel.findWebsiteById(webId)
            .then(function (website) {
                    res.send(website)
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }

    function updateWebsite(req, res) {
        var website = req.body;
        var webId = req.params.websiteId;
        websiteModel.updateWebsite(webId, website)
            .then(function (success) {
                    res.sendStatus(200);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }

    function deleteWebsite(req, res) {
        var webId = req.params.websiteId;
        var userId = req.params.userId;
        websiteModel.deleteWebsite(userId, webId)
            .then(function (status) {
                    res.send(status);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }
}