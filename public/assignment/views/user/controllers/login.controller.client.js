define(['app', 'userFactory'], function (app) {
    app.controller('loginCntrl',
        ['$location', 'UserService', function ($location, UserService) {

            var vm = this;
            //Event handlers
            vm.login = login;

            function login(user) {
                    UserService.login(user).then(function (found) {
                        if (found != null || found != undefined) {
                            $location.url("/ph/profile");
                        }
                        else {
                            vm.error = "Username and Password combination does not exist";
                        }
                    });
            }


        }]);
    return app;
});