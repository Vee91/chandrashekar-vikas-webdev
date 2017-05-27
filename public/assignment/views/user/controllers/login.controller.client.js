define(['app', 'userFactory'], function (app) {
    app.controller('loginCntrl',
        ['$scope', '$location', '$rootScope', 'UserService', function ($scope, $location, $rootScope, UserService) {
            $rootScope.header = false;
            $rootScope.header1 = false;
            $rootScope.header2 = true;
            $rootScope.hideProfileButton = true;
            $rootScope.showOk = false;
            $rootScope.headerDetails = {text: 'Login'};

            var vm = this;

            //Event handlers
            vm.login = login;

            function login(username, password) {
                var user =
                    UserService.findUserByCredentials(username, password);
                if (user != null) {
                    $location.url("/user/" + user._id);
                }
                else {
                    vm.error = "Username and Password combination does not exist";
                }
            }


        }]);
    return app;
});