define(['angular', 'app'], function (angular, app) {
    app.controller('newWebsiteCntrl',
        ['$scope', '$compile', '$rootScope', function ($scope, $compile, $rootScope) {
            $rootScope.header = true;
            $rootScope.header1 = false;
            $rootScope.header2 = false;
            $rootScope.hideProfileButton = false;
            $rootScope.headerDetails = {text: 'Websites', text2: 'New Website'}

            function init() {
                var el = '<a href="websites"><span class="glyphicon glyphicon-chevron-left header-text"></span></a>';
                var element = angular.element(document.querySelector('#leftArrow'));
                var generated = element.html(el);
                $compile(generated.contents())($scope);

                var el1 = '<a class="pull-right"><span class="glyphicon glyphicon-plus header-text"></span></a>';
                var element1 = angular.element(document.querySelector('#plusIcon1'));
                var generated1 = element1.html(el1);
                $compile(generated1.contents())($scope);

                var el2 = '<a href="websites"><span class="glyphicon glyphicon-ok header-text pull-right"></span></a>';
                var element2 = angular.element(document.querySelector('#okIcon'));
                var generated2 = element2.html(el2);
                $compile(generated2.contents())($scope);

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