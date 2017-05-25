define(['angular', 'app'], function (angular, app) {
    app.controller('widgetsCntrl',
        ['$scope', '$compile', '$rootScope', function ($scope, $compile, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = true;
            $rootScope.header2 = false;
            $rootScope.hideProfileButton = false;
            $rootScope.addIcon1 = false;
            $rootScope.headerDetails = {text: 'Widgets'};

            function init() {
                var el = '<a href="chooseWidget"> <span class="glyphicon glyphicon-plus header-text pull-right"></span> </a>';
                var element = angular.element(document.querySelector('#plusIcon'));
                var generated = element.html(el);
                $compile(generated.contents())($scope);

                var el1 = '<a href="pages"><span class="glyphicon glyphicon-chevron-left header-text"></span></a>';
                var element1 = angular.element(document.querySelector('#backIcon'));
                var generated1 = element1.html(el1);
                $compile(generated1.contents())($scope);
            }

            init();

        }]);
    return app;
});