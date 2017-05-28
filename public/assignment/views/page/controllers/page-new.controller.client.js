define(['app', 'pageFactory'], function (app) {
    app.controller('newpageCntrl',
        ['$routeParams', '$location', 'PageService', function ($routeParams, $location, PageService) {
            var vm = this;
            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;

            // Event handlers
            vm.createPage = createPage;


            function init() {
                vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
            }
            init();
            
            function createPage(page) {
                if(confirm ("Are you sure you want to create new page?")) {
                    vm.pages = PageService.createPage(vm.websiteId, page);
                    $location.url("user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                }
            }

        }]);
    return app;
});