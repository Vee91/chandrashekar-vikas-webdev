define(['angular', 'app'], function (angular, app) {
    app.controller('profileCntrl',
        ['$scope', '$compile', '$routeParams', '$rootScope', function ($scope, $compile, $routeParams, $rootScope) {
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

            var users = [
                {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
                {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
                {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
            ];

            var userId = $routeParams['userId'];
            var found = null;

            for(var u in users) {
                if(users[u]._id === userId)
                    $scope.user = users[u];
            }
            function saveProfile() {

            }

        }]);
    return app;
});