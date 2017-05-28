define(['app', 'websiteFactory'], function (app) {
    app.controller('websitesCntrl',
        ['$routeParams', 'WebsiteService', function ($routeParams, WebsiteService) {
            var vm = this;
            vm.userId = $routeParams.uid;

            function init() {
                vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            }
            init();

        }]);
    return app;
});