define(['angular', 'app'], function (angular, app) {
    app.controller('loginCntrl',
        ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = false;
            $rootScope.header2 = true;
            $rootScope.hideProfileButton = true;
            $rootScope.showOk = false;
            $rootScope.headerDetails = {text: 'Login'};

            var vm = this;

            var users = [
                {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
                {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
                {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
                {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
            ];

            vm.login = function (username, password) {
                var found = null;

                for (var u in users) {
                    var user = users[u];
                    if (user.username === username &&
                        user.password === password) {
                        found = user;
                    }
                }

                if (found !== null) {
                    $location.url('/user/' + found._id);
                }
                else {
                    console.log("not found");

                }
            }


        }]);
    return app;
});