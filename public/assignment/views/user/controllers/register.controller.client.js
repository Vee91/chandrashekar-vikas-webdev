define(['app', 'userFactory'], function (app) {
    app.controller('registerCntrl',
        ['$location', 'UserService', function ($location, UserService) {
            var vm = this;

            //Event handlers
            vm.createUser = createUser;

            function createUser(username, password, confirm) {
                if (username != undefined && username !== "" &&
                    password !== undefined && password !== "" &&
                    confirm !== undefined && confirm !== "" &&
                    password === confirm) {

                    UserService
                        .findUserByUsername(username)
                        .then(
                            function (foundUser) {
                                if (foundUser !== 'NotFound') {
                                    vm.error = "Sorry, that username is taken";
                                }
                                else {
                                    var newUser = {
                                        username: username,
                                        password: password,
                                        firstName: username,
                                        lastName: username,
                                        email: username + "@gmail.com"
                                    };
                                    return UserService
                                        .register(newUser);
                                }
                            }
                        )
                        .then(function (user) {
                            $location.url('/ph/profile');
                        });
                }
                else {
                    if (username === undefined || username === "") {
                        vm.error = "Please enter the username";
                    }
                    else if (password === undefined || password === "") {
                        vm.error = "Please enter the passwords";
                    }
                    else if (confirm === undefined || confirm === "") {
                        vm.error = "Please confirm password";
                    }
                    else if (password !== confirm) {
                        vm.error = "Please make sure passwords match";
                    }
                }
            }

            function generateUUID() {
                var d = new Date().getTime();
                if (window.performance && typeof window.performance.now === "function") {
                    d += performance.now();
                }
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            };

        }]);
    return app;
});