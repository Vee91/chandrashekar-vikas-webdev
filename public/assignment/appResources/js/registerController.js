define(['angular', 'app'], function (angular, app) {
    app.controller('registerCntrl',
        ['$scope', '$rootScope', function ($scope, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = false;
            $rootScope.header2 = true;
            $rootScope.hideProfileButton = true;
            $rootScope.showOk = false;
            $rootScope.headerDetails = {text: 'Register'}

        }]);
    return app;
});