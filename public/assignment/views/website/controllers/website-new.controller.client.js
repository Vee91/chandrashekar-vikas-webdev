define(['app', 'websiteFactory'], function (app) {
    app.controller('newWebsiteCntrl',
        ['$location', '$routeParams', 'WebsiteService', function ($location, $routeParams, WebsiteService) {
            var vm = this;
            vm.userId = $routeParams.uid;

            // Event handlers
            vm.createWebsite = createWebsite;

            function init() {
                WebsiteService.findWebsitesByUser(vm.userId)
                    .then(function (found) {
                        vm.websites = found;
                    });
            }
            init();

            function createWebsite(website) {
                if(confirm ("Are you sure you want to create new website?")) {
                    WebsiteService.createWebsite(vm.userId, website)
                        .then(function (found) {
                            vm.websites = found;
                            $location.url("/user/"+vm.userId+"/website")
                        });
                }
            }

        }]);
    return app;
});