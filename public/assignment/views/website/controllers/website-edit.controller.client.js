define(['app', 'websiteFactory'], function (app) {
    app.controller('editWebsiteCntrl',
        ['$location', '$routeParams', 'WebsiteService', 'currentUser', function ($location, $routeParams, WebsiteService, currentUser) {
            var vm = this;
            vm.userId = currentUser._id;
            vm.websiteId = $routeParams.wid;

            // Event handlers
            vm.saveWebsite = saveWebsite;
            vm.deleteWebsite = deleteWebsite;

            function init() {
                WebsiteService.findWebsitesByUser(vm.userId)
                    .then(function (found) {
                        vm.websites = found;
                    });
                WebsiteService.findWebsiteById(vm.websiteId)
                    .then(function (found) {
                        vm.website = found;
                    });
            }

            init();

            function saveWebsite(website) {
                if (confirm("Are you sure you want to update the website?")) {
                    WebsiteService.updateWebsite(website._id, website)
                        .then(function () {
                            $location.url("/ph/website");
                        });
                }
            }

            function deleteWebsite(websiteId) {
                if (confirm("Are you sure you want to delete this website?")) {
                    WebsiteService.deleteWebsite(vm.userId, websiteId)
                        .then(function () {
                            $location.url("/ph/website");
                        });
                }
            }

        }]);
    return app;
});