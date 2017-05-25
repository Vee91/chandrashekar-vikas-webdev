define([], function () {
    var routesConfig = {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'views/user/templates/login.view.client.html',
                dependencies: ['loginController'],
                controller: 'loginCntrl',
                controllerAs: 'model'
            },
            "/user/:uid": {
                templateUrl: 'views/user/templates/profile.view.client.html',
                dependencies: ['profileController']
            },
            '/register': {
                templateUrl: 'views/user/templates/register.view.client.html',
                dependencies: ['registerController']
            },
            '/websites': {
                templateUrl: 'views/website/templates/website-list.view.client.html',
                dependencies: ['websitesController']
            },
            '/newWebsite': {
                templateUrl: 'views/website/templates/website-new.view.client.html',
                dependencies: ['newWebsiteController']
            },
            '/editWebsite': {
                templateUrl: 'views/website/templates/website-edit.view.client.html',
                dependencies: ['editWebsiteController']
            },
            '/pages': {
                templateUrl: 'views/page/templates/page-list.view.client.html',
                dependencies: ['pagesController']
            },
            '/newPage': {
                templateUrl: 'views/page/templates/page-new.view.client.html',
                dependencies: ['newPageController']
            },
            '/editPage': {
                templateUrl: 'views/page/templates/page-edit.view.client.html',
                dependencies: ['editPageController']
            },
            '/widgets': {
                templateUrl: 'views/widget/templates/widget-list.view.client.html',
                dependencies: ['widgetsController']
            },
            '/chooseWidget': {
                templateUrl: 'views/widget/templates/widget-chooser.view.client.html',
                dependencies: ['chooseWidgetController']
            },
            '/headingWidget': {
                templateUrl: 'views/widget/templates/widget-heading.view.client.html',
                dependencies: ['headingWidgetController']
            },
            '/imageWidget': {
                templateUrl: 'views/widget/templates/widget-image.view.client.html',
                dependencies: ['imageWidgetController']
            },
            '/youtubeWidget': {
                templateUrl: 'views/widget/templates/widget-youtube.view.client.html',
                dependencies: ['youtubeWidgetController']
            }
        }
    };
    return routesConfig;
});