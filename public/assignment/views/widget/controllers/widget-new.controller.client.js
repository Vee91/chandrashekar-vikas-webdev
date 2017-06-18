define(['app'], function (app) {
    app.controller('chooseWidgetCntrl',
        ['$routeParams', '$location', 'currentUser', function ($routeParams, $location, currentUser) {
            var vm = this;
            vm.userId=currentUser._id;
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
                $location.url("/ph/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/new/" + name.toLowerCase());
            }
        }]);
    return app;
});