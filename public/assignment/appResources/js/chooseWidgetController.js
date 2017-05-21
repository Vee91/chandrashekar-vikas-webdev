define(['angular', 'app'], function (angular, app) {
    app.controller('chooseWidgetCntrl',
        ['$scope', '$location', '$compile', '$rootScope', function ($scope, $location, $compile, $rootScope) {
            $rootScope.header = false;
            $rootScope.header1 = true;
            $rootScope.header2 = false;
            $rootScope.hideProfileButton = false;
            $rootScope.addIcon1 = true;
            $rootScope.headerDetails = {text: 'Choose Widget'};

            function init() {
                var el1 = '<a href="widgets"><span class="glyphicon glyphicon-chevron-left header-text"></span></a>';
                var element1 = angular.element(document.querySelector('#backIcon'));
                var generated1 = element1.html(el1);
                $compile(generated1.contents())($scope);
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