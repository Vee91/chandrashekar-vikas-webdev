define(['app', 'websiteFactory'], function (app) {
    app.controller('editWebsiteCntrl',
        ['$location', '$routeParams', 'WebsiteService', function ($location, $routeParams, WebsiteService) {
            var vm = this;
            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;

            // Event handlers
            vm.saveWebsite = saveWebsite;
            vm.deleteWebsite = deleteWebsite;

            function init() {
                vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
                vm.website = WebsiteService.findWebsiteById(vm.websiteId);
            }

            init();

            function saveWebsite(website) {
                if (confirm("Are you sure you want to update the website?")) {
                    WebsiteService.updateWebsite(website._id, website);
                    $location.url("/user/" + vm.userId + "/website");
                }
            }

            function deleteWebsite(websiteId) {
                if (confirm("Are you sure you want to delete this website?")) {
                    WebsiteService.deleteWebsite(websiteId);
                    $location.url("/user/" + vm.userId + "/website");
                }
            }

        }]);
    return app;
});