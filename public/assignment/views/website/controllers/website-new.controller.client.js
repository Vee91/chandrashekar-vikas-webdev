define(['app', 'websiteFactory'], function (app) {
    app.controller('newWebsiteCntrl',
        ['$location', '$routeParams', 'WebsiteService', 'currentUser', function ($location, $routeParams, WebsiteService, currentUser) {
            var vm = this;
            vm.userId = currentUser._id/*$routeParams.uid*/;

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
                            $location.url("/ph/website")
                        });
                }
            }

        }]);
    return app;
});