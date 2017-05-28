define(['app', 'userFactory'], function (app) {
    app.controller('loginCntrl',
        ['$location', 'UserService', function ($location, UserService) {

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