define(['app', 'pageFactory'], function (app) {
    app.controller('newpageCntrl',
        ['$routeParams', '$location', 'PageService', function ($routeParams, $location, PageService) {
            var vm = this;
            vm.userId = $routeParams.uid;
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
                            $location.url("user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                        });
                }
            }

        }]);
    return app;
});