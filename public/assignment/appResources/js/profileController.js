define(['angular', 'app'], function (angular, app) {
    app.controller('profileCntrl',
        ['$scope', '$rootScope', function ($scope, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = false;
            $rootScope.header2 = true;
            $rootScope.hideProfileButton = false;
            $rootScope.okButton = true;
            $rootScope.headerDetails = {text: 'Profile'}
        }]);
    return app;
});