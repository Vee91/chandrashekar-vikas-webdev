define(['app', 'pocFactory'], function (app) {
    app.controller('champpocdetailsController',
        ['$location', '$routeParams', 'PocService', function ($location, $routeParams, PocService) {

            var vm = this;
            vm.champ1 = $routeParams.c1;

            function init() {
                PocService.findChampById(vm.champ1)
                    .then(function (response) {
                        vm.champ1details = response;
                    });
            }

            init();

        }]);
    return app;
});