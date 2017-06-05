var app = require('../../express');

var pages = [
    {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
    {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
    {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}];

app.post('/api/website/:websiteId/page', createPage);
app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
app.get('/api/page/:pageId', findPageById);
app.put('/api/page/:pageId', updatePage);
app.delete('/api/page/:pageId', deletePage);

function findAllPagesForWebsite(req, res) {
    var webId = req.params.websiteId;
    var result = [];
    for (var p in pages) {
        if (pages[p].websiteId === webId) {
            result.push(pages[p]);
        }
    }
    res.json(result);
}

function createPage(req, res) {
    var page = req.body;
    pages.push(page);
    findAllPagesForWebsite(req, res);
}

function findPageById(req, res) {
    var pageId = req.params.pageId;
    for (var p in pages) {
        if (pages[p]._id === pageId) {
            res.json(pages[p]);
            return;
        }
    }
    res.sendStatus(404);
}

function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params.pageId;
    for (var p in pages) {
        if (pages[p]._id === pageId) {
            pages[p].name = page.name;
            pages[p].description = page.description;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deletePage(req, res) {
    var pageId = req.params.pageId;
    for (var p in pages) {
        if (pages[p]._id === pageId) {
            pages.splice(p, 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}