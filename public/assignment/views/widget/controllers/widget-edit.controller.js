define(['app', 'widgetFactory'], function (app) {
    app.controller('editWidgetCntrl',
        ['$routeParams', '$location', 'WidgetService', 'currentUser', function ($routeParams, $location, WidgetService, currentUser) {
            var vm = this;

            function init() {
                vm.userId = currentUser._id;
                vm.websiteId = $routeParams.wid;
                vm.pageId = $routeParams.pid;
                vm.widgetName = $routeParams.wgn;
                vm.widgetId = $routeParams.wgid;

                WidgetService.findWidgetById(vm.widgetId)
                    .then(function (found) {
                        vm.widget = found;
                    });
            }

            init();

            //Event handlers
            vm.includeWidgetEdit = includeWidgetEdit;
            vm.addWidget = addWidget;
            vm.deleteWidget = deleteWidget;

            function includeWidgetEdit() {
                if (vm.widgetName != undefined) {
                    vm.widgetName = vm.widgetName.replace(/\s+/g, '');
                    var url = 'views/widget/editors/widget-' + vm.widgetName.toLowerCase() + '-edit.view.client.html';
                    return url;
                }
                else if (vm.widgetId != undefined) {
                    var url = 'views/widget/editors/widget-' + vm.widget.type.toLowerCase() + '-edit.view.client.html';
                    return url;
                }
            }

            function addWidget(widget) {
                if (confirm("Are you sure you want to make these changes?")) {
                    if (vm.widgetName != undefined) {
                        vm.widgetName = vm.widgetName.replace(/\s+/g, '');
                        widget.type = vm.widgetName.toUpperCase();
                        WidgetService.createWidget(vm.pageId, widget)
                            .then(function () {
                                $location.url("/ph/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                            });
                    }
                    else if (vm.widgetId != undefined) {
                        WidgetService.updateWidget(vm.widget._id, vm.widget)
                            .then(function () {
                                $location.url("/ph/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                            });
                    }
                }
            }

            function deleteWidget(widgetId) {
                WidgetService.deleteWidget(vm.pageId, widgetId)
                    .then(function () {
                        $location.url("/ph/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                    });
            }

        }]);
    return app;
});