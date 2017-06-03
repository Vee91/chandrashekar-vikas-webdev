define(['app', 'userFactory'], function (app) {
    app.controller('profileCntrl',
        ['$routeParams', 'UserService', function ($routeParams, UserService) {

            var vm = this;
            vm.userId = $routeParams['uid'];

            // Event handlers
            vm.saveProfile = saveProfile;

            function init() {
                UserService.findUserById(vm.userId)
                    .then(renderUser, userError);
            }

            init();

            function saveProfile(user) {
                if (confirm('Are you sure you want to save changes?')) {
                    UserService
                        .updateUser(user._id, user)
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

        }]);
    return app;
});