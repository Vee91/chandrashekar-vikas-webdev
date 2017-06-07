define(['app'], function (app) {
    app.service('FlickrService', function ($http) {

        this.searchPhotos = searchPhotos;

        var key = "20f52a95c903faa31a1c94adc333f0d2";
        var secret = "aac130bc0ef5a23b";
        var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";

        function searchPhotos(searchTerm) {
            var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
            return $http.get(url);
        }

    });
});