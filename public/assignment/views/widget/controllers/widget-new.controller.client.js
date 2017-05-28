define(['app'], function (app) {
    app.controller('chooseWidgetCntrl',
        ['$routeParams', '$location', function ($routeParams, $location) {
            var vm = this;
            vm.userId=$routeParams.uid;
            vm.websiteId=$routeParams.wid;
            vm.pageId=$routeParams.pid;
            vm.widgetId=$routeParams.wgid;

            function init() {
                findwidgets();
            }
            init();

            //Event handlers
            vm.widgetClick = widgetClick;

            function findwidgets() {
                vm.widgetTypes = [
                    {name: 'Heading'},
                    {name: 'Label'},
                    {name: 'HTML'},
                    {name: 'Text Input'},
                    {name: 'Link'},
                    {name: 'Button'},
                    {name: 'Image'},
                    {name: 'YouTube'},
                    {name: 'Data Table'},
                    {name: 'Repeater'}
                ];
            }

            function widgetClick(name) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/new/" + name.toLowerCase());
            }
        }]);
    return app;
});