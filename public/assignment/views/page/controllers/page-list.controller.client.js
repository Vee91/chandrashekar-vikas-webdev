define(['app', 'pageFactory'], function (app) {
    app.controller('pagesCntrl',
        ['$routeParams', 'PageService', function ($routeParams, PageService) {
            var vm = this;
            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;

            function init() {
                vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
            }
            init();

        }]);
    return app;
});