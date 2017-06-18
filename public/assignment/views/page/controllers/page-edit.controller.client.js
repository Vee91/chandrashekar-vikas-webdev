define(['app', 'pageFactory'], function (app) {
    app.controller('editPageCntrl',
        ['$routeParams', '$location', 'PageService', 'currentUser', function ($routeParams, $location, PageService, currentUser) {
            var vm = this;
            vm.userId = currentUser._id;
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
                            $location.url("/ph/website/" + vm.websiteId + "/page");
                        });
                }
            }

            function deletePage(pageId) {
                if (confirm("Are you sure you want to delete this page?")) {
                    PageService.deletePage(vm.websiteId, pageId)
                        .then(function () {
                            $location.url("/ph/website/" + vm.websiteId + "/page");
                        });
                }
            }

        }]);
    return app;
});