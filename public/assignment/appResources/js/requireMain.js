require.config({
    baseUrl: '',
    // paths: maps ids with paths (no extension)
    paths: {
        'angular': 'extResources/js/angular.min',
        'domReady': 'extResources/js/domready',
        'angularRoute': 'extResources/js/angular-route',
        'angularSanitize':'extResources/js/angular-sanitize',
        'bootstrap': 'extResources/css/bootstrap.min',
        'rangy-core': 'extResources/js/rangy-core',
        'rangy-selectionsaverestore': 'extResources/js/rangy-selectionsaverestore',
        'textAngular-rangy': 'extResources/js/textAngular-rangy.min',
        'textAngularSanitizeSrc': 'extResources/js/textAngular-sanitize.min',
        'textAngular': 'extResources/js/textAngular.min',
        'routes': 'config',
        'app': 'app',
        'loginController': 'views/user/controllers/login.controller.client',
        'profileController': 'views/user/controllers/profile.controller.client',
        'registerController': 'views/user/controllers/register.controller.client',
        'websitesController': 'views/website/controllers/website-list.controller.client',
        'newWebsiteController': 'views/website/controllers/website-new.controller.client',
        'editWebsiteController': 'views/website/controllers/website-edit.controller.client',
        'pagesController': 'views/page/controllers/page-list.controller.client',
        'newPageController': 'views/page/controllers/page-new.controller.client',
        'editPageController': 'views/page/controllers/page-edit.controller.client',
        'widgetsController': 'views/widget/controllers/widget-list.controller.client',
        'champpocController': 'POC/champpocController',
        'champpocdetailsController': 'POC/champpocdetailsController',
        'chooseWidgetController': 'views/widget/controllers/widget-new.controller.client',
        'editWidgetController': 'views/widget/controllers/widget-edit.controller',
        'FlickrImageSearchController': 'views/widget/controllers/widget-flickr-search.controller.client',
        'userFactory': 'services/user.service.client',
        'pocFactory': 'services/poc.service.client',
        'websiteFactory': 'services/website.service.client',
        'pageFactory': 'services/page.service.client',
        'widgetFactory': 'services/widget.service.client',
        'flickrFactory': 'services/flickr.service.client',
        'wbdv-sortable': 'directives/wbdv-sortable'
    },
    // shim: makes external libraries reachable
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularRoute': {
            'deps': ['angular']
        },
        'angularSanitize': {
            'deps': ['angular']
        },
        'textAngularSanitizeSrc': {
            'deps': ['angular', 'angularSanitize'],
            'exports':'textAngularSanitizeSrc'
        },
        'textAngular':{
            'deps': ['angular', 'textAngularSanitizeSrc'],
            'exports':'textAngular'
        }
    }
});

// Angular Bootstrap
require(['app'], function (app) {
    angular.element().ready(function () {
        // bootstrap the app manually
        require(['domReady'], function () {
            angular.bootstrap(document, ['WAM']);
        });

    });
});