define(['app', 'websiteFactory'], function (app) {
    app.controller('websitesCntrl',
        ['$routeParams', 'WebsiteService', 'currentUser', function ($routeParams, WebsiteService, currentUser) {
            var vm = this;
            vm.userId = currentUser._id;

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