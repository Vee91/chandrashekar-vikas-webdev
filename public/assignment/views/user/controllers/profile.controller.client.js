define(['app', 'userFactory'], function (app) {
    app.controller('profileCntrl',
        ['$routeParams', 'UserService', function ($routeParams, UserService) {

            var vm = this;
            vm.userId = $routeParams['uid'];

            // Event handlers
            vm.saveProfile = saveProfile;

            function init() {
                vm.user = UserService.findUserById(vm.userId);
            }

            init();

            function saveProfile(user) {
                if(confirm('Are you sure you want to save changes?')){
                    UserService.updateUser(user);
                    alert('Profile Saved');
                }
            }

        }]);
    return app;
});