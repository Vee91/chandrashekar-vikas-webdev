define(['app', 'websiteFactory'], function (app) {
    app.controller('newWebsiteCntrl',
        ['$location', '$routeParams', 'WebsiteService', function ($location, $routeParams, WebsiteService) {
            var vm = this;
            vm.userId = $routeParams.uid;

            // Event handlers
            vm.createWebsite = createWebsite;

            function init() {
                vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
            }
            init();

            function createWebsite(website) {
                if(confirm ("Are you sure you want to create new website?")) {
                    vm.websites = WebsiteService.createWebsite(vm.userId, website);
                    $location.url("/user/"+vm.userId+"/website")
                }
            }

        }]);
    return app;
});