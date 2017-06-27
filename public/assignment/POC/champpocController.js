define(['app', 'pocFactory'], function (app) {
    app.controller('champpocController',
        ['$location', 'PocService', function ($location, PocService) {

            var vm = this;

            vm.findChampDetails = findChampDetails;

            function init() {
                PocService.findAllChampions()
                    .then(function (response) {
                        var champs = response;
                        var keys = [],
                            result = [],
                            k, i;
                        for (k in champs) {
                            if (champs.hasOwnProperty(k)) {
                                keys.push(k);
                            }
                        }
                        keys.sort();

                        len = keys.length;

                        for (i = 0; i < len; i++) {
                            k = keys[i];
                            result.push(champs[k]);
                        }

                        vm.champions = result;
                        vm.champ = result[0];
                    });
            }

            init();

            function findChampDetails() {
                $location.url("/ph/pocChampDetails/" + vm.champ.id);
            }

        }]);
    return app;
});