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
                PageService.findPageByWebsiteId(vm.websiteId)
                    .then(function (found) {
                        vm.pages = found;
                    });
                PageService.findPageById(vm.pageId)
                    .then(function (found) {
                        vm.page = found;
                    });
            }

            init();

            function savePage(page) {
                if (confirm("Are you sure you want to update the page?")) {
                    PageService.updatePage(page._id, page)
                        .then(function () {
                            $location.url("user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                        });
                }
            }

            function deletePage(pageId) {
                if (confirm("Are you sure you want to delete this page?")) {
                    PageService.deletePage(vm.websiteId, pageId)
                        .then(function () {
                            $location.url("user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                        });
                }
            }

        }]);
    return app;
});