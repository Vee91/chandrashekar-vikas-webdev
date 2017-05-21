define(['angular', 'app'], function (angular, app) {
    app.controller('websitesCntrl',
        ['$scope', '$compile', '$rootScope', function ($scope, $compile, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = true;
            $rootScope.header2 = false;
            $rootScope.hideProfileButton = false;
            $rootScope.addIcon1 = false;
            $rootScope.headerDetails = {text: 'Websites'};

            function init() {
                var el = '<a href="newWebsite"> <span class="glyphicon glyphicon-plus header-text pull-right"></span> </a>';
                var element = angular.element(document.querySelector('#plusIcon'));
                var generated = element.html(el);
                $compile(generated.contents())($scope);

                var el1 = '<a href="profile"><span class="glyphicon glyphicon-chevron-left header-text"></span></a>';
                var element1 = angular.element(document.querySelector('#backIcon'));
                var generated1 = element1.html(el1);
                $compile(generated1.contents())($scope);
                findWebsites();
            }

            init();

            function findWebsites() {
                $scope.websites = [
                    {name: 'Address Book App'},
                    {name: 'Blogger'},
                    {name: 'Blogging App'},
                    {name: 'Script Testing App'}
                ];
            }
        }]);
    return app;
});