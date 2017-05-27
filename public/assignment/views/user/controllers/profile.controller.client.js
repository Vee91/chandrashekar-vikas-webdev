define(['angular', 'app', 'userFactory'], function (angular, app) {
    app.controller('profileCntrl',
        ['$scope', '$compile', '$routeParams', '$rootScope', 'UserService', function ($scope, $compile, $routeParams, $rootScope, UserService) {
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

            var vm = this;
            vm.userId = $routeParams['uid'];

            // Event handlers
            vm.saveProfile = saveProfile;

            function init() {
                vm.user = UserService.findUserById(vm.userId);
            }

            init();

            function saveProfile() {

            }

        }]);
    return app;
});