define(['app', 'websiteFactory'], function (app) {
    app.controller('websitesCntrl',
        ['$routeParams', 'WebsiteService', function ($routeParams, WebsiteService) {
            var vm = this;
            vm.userId = $routeParams.uid;

            function init() {
                WebsiteService.findWebsitesByUser(vm.userId)
                    .then(function (found) {
                        vm.websites = found;
                    });
            }

            init();

        }]);
    return app;
});