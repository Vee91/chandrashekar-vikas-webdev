define(['app', 'userFactory'], function (app) {
    app.controller('registerCntrl',
        ['$location', '$rootScope', 'UserService', function ($location, $rootScope, UserService) {
            var vm = this;

            //Event handlers
            vm.createUser = createUser;

            function createUser(username, password, confirm) {
                if (username != undefined && username !== "" &&
                    password !== undefined && password !== "" &&
                    confirm !== undefined && confirm !== "" &&
                    password === confirm) {
                    var uid = generateUUID();
                    var user = {
                        _id: uid,
                        username: username,
                        password: password,
                        firstName: username,
                        lastName: username,
                        email: username + "@gmail.com"
                    };

                    var result = UserService.createUser(user);
                    if (result) {
                        $location.url("/user/" + user._id);
                    } else {
                        vm.error = "Failed to create user";
                    }
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