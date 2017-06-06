var app = require('../../express');

var widgets = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

app.post('/api/page/:pageId/widget', createWidget);
app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
app.get('/api/widget/:widgetId', findWidgetById);
app.put('/api/widget/:widgetId', updateWidget);
app.delete('/api/widget/:widgetId', deleteWidget);

function createWidget(req, res) {
    var widget = req.body;
    widgets.push(widget);
    findAllWidgetsForPage(req, res);
}

function findAllWidgetsForPage(req, res) {
    var pageId = req.params.pageId;
    var result = [];
    for (var w in widgets) {
        if (widgets[w].pageId === pageId) {
            result.push(widgets[w]);
        }
    }
    res.json(result);
}

function findWidgetById(req, res) {
    var widgetId = req.params.widgetId;
    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            console.log('found')
            res.json(widgets[w]);
            return;
        }
    }
    res.sendStatus(404);
}

function updateWidget(req, res) {
    var widget = req.body;
    var widgetId = req.params.widgetId;
    for (var w in widgets) {
        if (widgets[w]._id === widgetId) {
            widgets[w] = widget;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deleteWidget(req, res) {
    var widgetId = req.params.widgetId;
    for (var i in widgets) {
        if (widgets[i]._id === widgetId) {
            widgets.splice(i, 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}