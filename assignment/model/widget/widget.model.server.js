module.exports = function (pageModel) {
    var mongoose = require("mongoose");
    var WidgetSchema = require("./widget.schema.server")();
    var widgetModel = mongoose.model("widgetModel", WidgetSchema);
    var factory = {
        createWidget: createWidget,
        findAllWidgetsForPage: findAllWidgetsForPage,
        findWidgetById: findWidgetById,
        updateWidget: updateWidget,
        deleteWidget: deleteWidget,
        reorderWidget: reorderWidget,
    };
    return factory;


    function findAllWidgetsForPage(pageId) {
        return widgetModel.find({
            _page: pageId
        })
    }

    function createWidget(pageId, widget) {
        return widgetModel
            .find({_page: pageId})
            .then(
                function (widgets) {
                    widget.order = widgets.length;
                    return widgetModel.create(widget)
                        .then(function (widget) {
                            return pageModel.addWidget(pageId, widget._id)
                        });
                }
            );
    }

    function findWidgetById(widgetId) {
        return widgetModel.findById(widgetId);
    }

    function updateWidget(widgetId, widget) {
        var type = widget.type;
        if (type == 'YOUTUBE') {
            return widgetModel
                .update(
                    {
                        _id: widgetId
                    },
                    {
                        name: widget.name,
                        description: widget.description,
                        url: widget.url,
                        width: widget.width,


                    }
                );
        }
        if (type == 'HEADER') {
            return widgetModel
                .update(
                    {
                        _id: widgetId
                    },
                    {
                        name: widget.name,
                        text: widget.text,
                        size: widget.size,


                    }
                );
        }
        if (type == 'IMAGE') {
            return widgetModel
                .update(
                    {
                        _id: widgetId
                    },
                    {
                        name: widget.name,
                        description: widget.description,
                        url: widget.url,
                        width: widget.width,


                    }
                );
        }
        if (type == 'HTML') {
            return widgetModel
                .update(
                    {
                        _id: widgetId
                    },
                    {
                        name: widget.name,
                        text: widget.text,


                    }
                );
        }
        if (type == 'TEXT') {
            return widgetModel
                .update(
                    {
                        _id: widgetId
                    },
                    {
                        text: widget.text,
                        rows: widget.rows,
                        placeholder: widget.placeholder,
                        formatted: widget.formatted


                    }
                );
        }

    }

    function deleteWidget(pageId, widgetId) {
        return findWidgetById(widgetId)
            .then(function (widget) {
                    var pid = widget._page;
                    var or = widget.order;
                    widgetModel.find({_page: widget._page}, function (error, widgets) {
                        widgets.forEach(function (widget) {
                            if (widget.order > widget.order) {
                                widget.order--;
                                widget.save(function () {
                                });
                            }
                        })

                    })
                    return widgetModel
                        .remove({
                            _id: widgetId
                        }).then(function (status) {
                            return pageModel.deleteWidget(pageId, widgetId)
                        })

                },
                function (errr) {
                });
    }

    function reorderWidget(pageId, start, end) {
        return widgetModel.find({_page: pageId}, function (error, widgets) {
            widgets.forEach(function (widget) {
                if (start > end) {
                    if (widget.order >= end && widget.order < start) {
                        widget.order++;
                        widget.save();
                    } else if (widget.order === start) {
                        widget.order = end;
                        widget.save();
                    }
                } else {
                    if (widget.order > start && widget.order <= end) {
                        widget.order--;
                        widget.save();
                    } else if (widget.order === start) {
                        widget.order = end;
                        widget.save();
                    }
                }
            });
        });
    }

    
};