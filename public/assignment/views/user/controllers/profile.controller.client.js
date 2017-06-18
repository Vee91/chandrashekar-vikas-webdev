define(['app', 'userFactory'], function (app) {
    app.controller('profileCntrl',
        ['$location', '$routeParams', 'UserService', 'currentUser', function ($location, $routeParams, UserService, currentUser) {

            var vm = this;

            // Event handlers
            vm.saveProfile = saveProfile;
            vm.logout = logout;

            function init() {
                UserService.findUserById(currentUser._id)
                    .then(renderUser, userError);
            }

            init();

            function saveProfile(user) {
                if (confirm('Are you sure you want to save changes?')) {
                    UserService
                        .updateUser(currentUser._id, user)
                        .then(function () {
                            alert("Profile saved successfully");
                        })
                }
            }

            function renderUser(user) {
                vm.user = user;
            }

            function userError() {
                vm.error = "User not found";
            }

            function logout() {
                UserService.logout()
                    .then(
                        function (response) {
                            $location.url("/");
                        })

            }

        }]);
    return app;
});