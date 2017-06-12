module.exports = function (model) {

    var app = require('../../express');
    var mime = require('mime');
    var multer = require('multer'); // npm install multer --save
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname + '/../../public/uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.' + mime.extension(file.mimetype));
        }
    });
    var upload = multer({storage: storage});

    var widgetModel = model.widgetModel;


    app.post('/api/page/:pageId/widget', createWidget);
    app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
    app.get('/api/widget/:widgetId', findWidgetById);
    app.put('/api/widget/:widgetId', updateWidget);
    app.delete('/api/page/:pageId/widget/:widgetId', deleteWidget);
    app.post("/api/upload", upload.single('myFile'), uploadImage);
    app.put("/api/page/:pageId/widget", sortWidget);

    function createWidget(req, res) {
        var widget = req.body;
        var pageId = req.params.pageId;
        console.log(widget);
        widgetModel.createWidget(pageId, widget)
            .then(function (widget) {
                if (widget) {
                    findAllWidgetsForPage(req, res);
                }
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findAllWidgetsForPage(req, res) {
        var pageId = req.params.pageId;
        widgetModel.findAllWidgetsForPage(pageId)
            .then(function (widgets) {
                    if (widgets) {
                        res.send(widgets);
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

    function findWidgetById(req, res) {
        var widgetId = req.params.widgetId;
        return widgetModel.findWidgetById(widgetId)
            .then(function (widget) {
                    res.send(widget)
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }

    function updateWidget(req, res) {
        var widget = req.body;
        var widgetId = req.params.widgetId;
        widgetModel.updateWidget(widgetId, widget)
            .then(function (success) {
                    res.sendStatus(200);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }

    function deleteWidget(req, res) {
        var widgetId = req.params.widgetId;
        var pageId = req.params.pageId;
        widgetModel.deleteWidget(pageId, widgetId)
            .then(function (status) {
                    res.send(status);
                },
                function (err) {
                    res.sendStatus(500).send(err);
                }
            )
    }

    function uploadImage(req, res) {

        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        var myFile = req.file;
        var nameGiven = req.body.name;

        var newWidget =
            {
                "_id": widgetId, "type": "IMAGE", "pageId": pageId, "width": width,
                "url": "/uploads/" + myFile.filename,
            };
        if (nameGiven) {
            newWidget.name = nameGiven;
        }
        else {
            newWidget.name = myFile.originalname;
        }
        if (width) {
            newWidget.width = width;
        }
        else {
            newWidget.width = "100%";
        }
        widgets.push(newWidget);
        res.redirect("/assignment/user/" + userId + "/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
    }

    function sortWidget(req, res) {
        var index1 = req.query.start;
        var index2 = req.query.end;
        var pageId = req.params.pageId;
        widgetModel.reorderWidget(pageId, index1, index2);
    }
}
