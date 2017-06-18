define([], function () {
    var routesConfig = {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'views/user/templates/login.view.client.html',
                dependencies: ['loginController'],
                cntrl: 'loginCntrl',
                cntrlAs: 'model'
            },
            "/ph/profile": {
                templateUrl: 'views/user/templates/profile.view.client.html',
                dependencies: ['profileController'],
                cntrl: 'profileCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/register': {
                templateUrl: 'views/user/templates/register.view.client.html',
                dependencies: ['registerController'],
                cntrl: 'registerCntrl',
                cntrlAs: 'model'
            },
            "/ph/website": {
                templateUrl: 'views/website/templates/website-list.view.client.html',
                dependencies: ['websitesController'],
                cntrl: 'websitesCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/new': {
                templateUrl: 'views/website/templates/website-new.view.client.html',
                dependencies: ['newWebsiteController'],
                cntrl: 'newWebsiteCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid': {
                templateUrl: 'views/website/templates/website-edit.view.client.html',
                dependencies: ['editWebsiteController'],
                cntrl: 'editWebsiteCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page': {
                templateUrl: 'views/page/templates/page-list.view.client.html',
                dependencies: ['pagesController'],
                cntrl: 'pagesCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page/new': {
                templateUrl: 'views/page/templates/page-new.view.client.html',
                dependencies: ['newPageController'],
                cntrl: 'newpageCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page/:pid': {
                templateUrl: 'views/page/templates/page-edit.view.client.html',
                dependencies: ['editPageController'],
                cntrl: 'editPageCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page/:pid/widget': {
                templateUrl: 'views/widget/templates/widget-list.view.client.html',
                dependencies: ['widgetsController'],
                cntrl: 'widgetsCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page/:pid/widget/new': {
                templateUrl: 'views/widget/templates/widget-chooser.view.client.html',
                dependencies: ['chooseWidgetController'],
                cntrl: 'chooseWidgetCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page/:pid/widget/new/:wgn': {
                templateUrl: 'views/widget/templates/widget-edit.view.client.html',
                dependencies: ['editWidgetController'],
                cntrl: 'editWidgetCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page/:pid/widget/:wgid': {
                templateUrl: 'views/widget/templates/widget-edit.view.client.html',
                dependencies: ['editWidgetController'],
                cntrl: 'editWidgetCntrl',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            },
            '/ph/website/:wid/page/:pid/flickr': {
                templateUrl: 'views/widget/templates/widget-flickr-search.view.client.html',
                dependencies: ['FlickrImageSearchController'],
                cntrl: 'FlickrImageSearchController',
                cntrlAs: 'model',
                res: 'checkLoggedin'
            }/*,
             '/ph/website/:wid/page/:pid/widget/new/image': {
             templateUrl: 'views/widget/editors/widget-image-edit.view.client.html',
             dependencies: ['editWidgetController'],
             cntrl: 'editWidgetCntrl',
             cntrlAs: 'model'
             },
             '/ph/website/:wid/page/:pid/widget/new/youtube': {
             templateUrl: 'views/widget/editors/widget-youtube-edit.view.client.html',
             dependencies: ['editWidgetController'],
             cntrl: 'editWidgetCntrl',
             cntrlAs: 'model'
             }*/
        }
    };
    return routesConfig;
});