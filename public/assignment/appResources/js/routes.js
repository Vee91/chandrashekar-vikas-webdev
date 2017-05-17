define([], function () {
    var routesConfig = {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'pages/login.html',
                dependencies: ['loginController']
            },
            '/profile': {
                templateUrl: 'pages/profile.html',
                dependencies: ['profileController']
            },
            '/register': {
                templateUrl: 'pages/register.html',
                dependencies: []
            },
        }
    };
    return routesConfig;
});