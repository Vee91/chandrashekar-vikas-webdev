require.config({
    baseUrl: '',
    // paths: maps ids with paths (no extension)
    paths: {
        'angular': 'extResources/js/angular.min',
        'domReady': 'extResources/js/domready',
        'angularRoute':'extResources/js/angular-route',
        'bootstrap':'extResources/css/bootstrap.min',
        'routes':'appResources/js/routes',
        'app':'appResources/js/app',
    },
    // shim: makes external libraries reachable
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularRoute': ['angular']
    }
});

// Angular Bootstrap
require(['app'], function (app) {
    angular.element().ready(function() {
        // bootstrap the app manually
        require(['domReady'], function() {
            angular.bootstrap(document, ['myApp']);
        });

    });
});