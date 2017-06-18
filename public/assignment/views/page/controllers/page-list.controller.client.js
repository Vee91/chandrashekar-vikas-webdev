define(['app', 'pageFactory'], function (app) {
    app.controller('pagesCntrl',
        ['$routeParams', 'PageService', 'currentUser', function ($routeParams, PageService, currentUser) {
            var vm = this;
            vm.userId = currentUser._id;
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