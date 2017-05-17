define(['angular', 'app'], function (angular, app) {
    app.controller('loginCntrl',
        ['$scope', '$rootScope', function ($scope, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = false;
            $rootScope.header2 = true;
            $rootScope.hideProfileButton = true;
            $rootScope.okButton = false;
            $rootScope.headerDetails = {text: 'Login'}
        }]);
    return app;
});