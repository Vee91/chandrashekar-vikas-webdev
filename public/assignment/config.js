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
                dependencies: ['profileController'],
                controller: 'profileCntrl',
                controllerAs: 'model'
            },
            '/register': {
                templateUrl: 'views/user/templates/register.view.client.html',
                dependencies: ['registerController'],
                controller: 'registerCntrl',
                controllerAs: 'model'
            },
            "/user/:uid/website": {
                templateUrl: 'views/website/templates/website-list.view.client.html',
                dependencies: ['websitesController'],
                controller: 'websitesCntrl',
                controllerAs: 'model'
            },
            '/user/:uid/website/new': {
                templateUrl: 'views/website/templates/website-new.view.client.html',
                dependencies: ['newWebsiteController'],
                controller: 'newWebsiteCntrl',
                controllerAs: 'model'
            },
            '/user/:uid/website/:wid': {
                templateUrl: 'views/website/templates/website-edit.view.client.html',
                dependencies: ['editWebsiteController'],
                controller: 'editWebsiteCntrl',
                controllerAs: 'model'
            },
            '/user/:uid/website/:wid/page': {
                templateUrl: 'views/page/templates/page-list.view.client.html',
                dependencies: ['pagesController'],
                controller: 'pagesCntrl',
                controllerAs: 'model'
            },
            '/user/:uid/website/:wid/page/new': {
                templateUrl: 'views/page/templates/page-new.view.client.html',
                dependencies: ['newPageController'],
                controller: 'newPageCntrl',
                controllerAs: 'model'
            },
            '/user/:uid/website/:wid/page/:pid': {
                templateUrl: 'views/page/templates/page-edit.view.client.html',
                dependencies: ['editPageController'],
                controller: 'editPageCntrl',
                controllerAs: 'model'
            },
            '/user/:uid/website/:wid/page/:pid/widget': {
                templateUrl: 'views/widget/templates/widget-list.view.client.html',
                dependencies: ['widgetsController'],
                controller: 'widgetCntrl',
                controllerAs: 'model'
            },
            '/user/:uid/website/:wid/page/:pid/widget/new': {
                templateUrl: 'views/widget/templates/widget-chooser.view.client.html',
                dependencies: ['chooseWidgetController'],
                controller: 'chooseWidgetCntrl',
                controllerAs: 'model'
            },
            '/headingWidget': {
                templateUrl: 'views/widget/templates/widget-heading.view.client.html',
                dependencies: ['editWidgetController'],
                controller: 'editWidgetCntrl',
                controllerAs: 'model'
            },
            '/imageWidget': {
                templateUrl: 'views/widget/templates/widget-image.view.client.html',
                dependencies: ['editWidgetController'],
                controller: 'editWidgetCntrl',
                controllerAs: 'model'
            },
            '/youtubeWidget': {
                templateUrl: 'views/widget/templates/widget-youtube.view.client.html',
                dependencies: ['editWidgetController'],
                controller: 'editWidgetCntrl',
                controllerAs: 'model'
            }
        }
    };
    return routesConfig;
});