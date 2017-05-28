define(['angular', 'app'], function (angular, app) {
    app.controller('newpageCntrl',
        ['$scope', function ($scope) {

            function init() {
                findpages();
            }

            init();

            function findpages() {
                $scope.pages = [
                    {name: 'Blog Post'},
                    {name: 'Blogs'},
                    {name: 'Home'},
                    {name: 'About'},
                    {name: 'Contact Us'}
                ];
            }
        }]);
    return app;
});