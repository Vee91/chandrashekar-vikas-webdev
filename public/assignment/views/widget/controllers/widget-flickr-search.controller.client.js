define(['app','widgetFactory', 'flickrFactory'], function (app) {
    app.controller('FlickrImageSearchController',
        ['$routeParams', '$location', 'FlickrService', 'WidgetService', function ($routeParams, $location, FlickrService, WidgetService) {
            var vm = this;
            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;
            vm.pageId = $routeParams.pid;

            vm.searchPhotos = searchPhotos;
            vm.selectPhoto = selectPhoto;

            function searchPhotos(searchTerm) {
                FlickrService
                    .searchPhotos(searchTerm)
                    .then(function (response) {
                        data = response.data.replace("jsonFlickrApi(", "");
                        data = data.substring(0, data.length - 1);
                        data = JSON.parse(data);
                        vm.photos = data.photos;
                    });

            }


            function selectPhoto(photo) {
                vm.pageId = $routeParams.pid;
                var url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server;
                url += "/" + photo.id + "_" + photo.secret + "_b.jpg";
                var widget = {
                        "type": "IMAGE", "width": "100%",
                        "url": url
                    };
                WidgetService
                    .createWidget(vm.pageId, widget)
                    .then(function () {
                        $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget");
                    });
             }

        }]);
    return app;
});