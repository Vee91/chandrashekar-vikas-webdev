define(['app'], function (app) {
    app.controller('pagesCntrl',
        ['$routeParams', function ($routeParams) {
            var vm = this;
            vm.userId = $routeParams.uid;

            function init() {
                vm.pages = [
                    {name: 'Blog Post'},
                    {name: 'Blogs'},
                    {name: 'Home'},
                    {name: 'About'},
                    {name: 'Contact Us'}];
            }
            init();

        }]);
    return app;
});