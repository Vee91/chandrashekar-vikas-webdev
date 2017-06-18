define(['app', 'pageFactory'], function (app) {
    app.controller('newpageCntrl',
        ['$routeParams', '$location', 'PageService', 'currentUser', function ($routeParams, $location, PageService, currentUser) {
            var vm = this;
            vm.userId = currentUser._id;
            vm.websiteId = $routeParams.wid;

            // Event handlers
            vm.createPage = createPage;


            function init() {
                PageService.findPageByWebsiteId(vm.websiteId)
                    .then(function (found) {
                        vm.pages = found;
                    });
            }
            init();
            
            function createPage(page) {
                if(confirm ("Are you sure you want to create new page?")) {
                    PageService.createPage(vm.websiteId, page)
                        .then(function (found) {
                            vm.pages = found;
                            $location.url("/ph/website/"+vm.websiteId+"/page");
                        });
                }
            }

        }]);
    return app;
});