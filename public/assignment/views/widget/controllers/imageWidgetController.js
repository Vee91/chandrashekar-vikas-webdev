define(['angular', 'app'], function (angular, app) {
    app.controller('imageWidgetCntrl',
        ['$scope', '$location', '$compile', '$rootScope', function ($scope, $location, $compile, $rootScope) {
            $rootScope.header = true;
            $rootScope.header1 = false;
            $rootScope.header2 = false;
            $rootScope.hideProfileButton = false;
            $rootScope.headerDetails = {text: 'Choose Widget', text2: 'Widget Edit'}

            function init() {
                var el = '<a href="widgets"><span class="glyphicon glyphicon-chevron-left header-text"></span></a>';
                var element = angular.element(document.querySelector('#leftArrow'));
                var generated = element.html(el);
                $compile(generated.contents())($scope);

                var el2 = '<a href="widgets"><span class="glyphicon glyphicon-ok header-text pull-right"></span></a>';
                var element2 = angular.element(document.querySelector('#okIcon'));
                var generated2 = element2.html(el2);
                $compile(generated2.contents())($scope);

                findwidgets();
            }

            init();

            function findwidgets() {
                $scope.widgets = [
                    {name: 'Header'},
                    {name: 'Label'},
                    {name: 'HTML'},
                    {name: 'Text Input'},
                    {name: 'Link'},
                    {name: 'Button'},
                    {name: 'Image'},
                    {name: 'YouTube'},
                    {name: 'Data Table'},
                    {name: 'Repeater'}
                ];
            }

            $scope.widgetClick = function (name) {
                if(name == 'Header'){
                    $location.path('/headingWidget');
                }
                else if(name == 'Image'){
                    $location.path('/imageWidget');
                }
                else if(name == 'YouTube'){
                    $location.path('/youtubeWidget');
                }
            }

        }]);
    return app;
});