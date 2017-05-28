define(['app', 'pageFactory'], function (app) {
    app.controller('editPageCntrl',
        ['$routeParams', '$location', 'PageService', function ($routeParams, $location, PageService) {
            var vm = this;
            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;
            vm.pageId = $routeParams.pid;

            // Event handlers
            vm.savePage = savePage;
            vm.deletePage = deletePage;

            function init() {
                vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
                vm.page = PageService.findPageById(vm.pageId);
            }
            init();

            function savePage(page) {
                if (confirm("Are you sure you want to update the page?")) {
                    PageService.updatePage(page._id, page);
                    $location.url("user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                }
            }

            function deletePage(pageId) {
                if (confirm("Are you sure you want to delete this page?")) {
                    PageService.deletePage(pageId);
                    $location.url("user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                }
            }

        }]);
    return app;
});