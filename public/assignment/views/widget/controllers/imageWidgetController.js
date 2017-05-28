define(['angular', 'app'], function (angular, app) {
    app.controller('imageWidgetCntrl',
        ['$location', function ($location) {

            function init() {
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