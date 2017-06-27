define(['app'], function (app) {
    app.factory('PocService', function ($http) {
        var factory = {
            findAllChampions: findAllChampions,
            findChampById: findChampById,
        };

        function findAllChampions() {
            var url = "/api/champions";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findChampById(champId) {
            var url = "/api/champion/" + champId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        return factory;
    });
});