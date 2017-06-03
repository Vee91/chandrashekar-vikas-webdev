define(['app', 'userFactory'], function (app) {
    app.controller('loginCntrl',
        ['$location', 'UserService', function ($location, UserService) {

            var vm = this;
            //Event handlers
            vm.login = login;

            function login(username, password) {
                    UserService.findUserByCredentials(username, password).then(function (found) {
                        if (found != null) {
                            $location.url("/user/" + found._id);
                        }
                        else {
                            vm.error = "Username and Password combination does not exist";
                        }
                    });

            }


        }]);
    return app;
});