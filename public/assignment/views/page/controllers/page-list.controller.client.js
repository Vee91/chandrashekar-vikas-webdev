define(['app', 'pageFactory'], function (app) {
    app.controller('pagesCntrl',
        ['$routeParams', 'PageService', function ($routeParams, PageService) {
            var vm = this;
            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;

            function init() {
                PageService.findPageByWebsiteId(vm.websiteId)
                    .then(function (found) {
                        vm.pages = found;
                    });
            }
            init();

        }]);
    return app;
});