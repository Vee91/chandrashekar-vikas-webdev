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
                dependencies: ['registerController']
            },
            '/websites': {
                templateUrl: 'pages/website-list.html',
                dependencies: ['websitesController']
            },
            '/newWebsite': {
                templateUrl: 'pages/website-new.html',
                dependencies: ['newWebsiteController']
            },
            '/editWebsite': {
                templateUrl: 'pages/website-edit.html',
                dependencies: ['editWebsiteController']
            },
            '/pages': {
                templateUrl: 'pages/page-list.html',
                dependencies: ['pagesController']
            },
            '/newPage': {
                templateUrl: 'pages/page-new.html',
                dependencies: ['newPageController']
            }
        }
    };
    return routesConfig;
});