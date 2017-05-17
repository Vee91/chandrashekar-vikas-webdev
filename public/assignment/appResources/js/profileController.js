define(['angular', 'app'], function (angular, app) {
    app.controller('profileCntrl',
        ['$scope', '$compile', '$rootScope', function ($scope, $compile, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = false;
            $rootScope.header2 = true;
            $rootScope.hideProfileButton = false;
            $rootScope.showOk = true;
            $rootScope.headerDetails = {text: 'Profile'};

            var el = '<a ng-click="saveProfile();"> <span class="glyphicon glyphicon-ok header-text pull-right"></span> </a>';
            var element = angular.element(document.querySelector('#okButton'));
            var generated = element.html(el);
            $compile(generated.contents())($scope);

            // Event handlers
            $scope.saveProfile = saveProfile;

            function saveProfile() {

            }
            
        }]);
    return app;
});