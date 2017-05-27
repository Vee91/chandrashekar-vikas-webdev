require.config({
    baseUrl: '',
    // paths: maps ids with paths (no extension)
    paths: {
        'angular':'extResources/js/angular.min',
        'domReady':'extResources/js/domready',
        'angularRoute':'extResources/js/angular-route',
        'bootstrap':'extResources/css/bootstrap.min',
        'routes':'config',
        'app':'app',
        'loginController':'views/user/controllers/login.controller.client',
        'profileController':'views/user/controllers/profile.controller.client',
        'registerController':'views/user/controllers/register.controller.client',
        'websitesController':'views/website/controllers/website-list.controller.client',
        'newWebsiteController':'views/website/controllers/website-new.controller.client',
        'editWebsiteController':'views/website/controllers/website-edit.controller.client',
        'pagesController':'views/page/controllers/page-list.controller.client',
        'newPageController':'views/page/controllers/page-new.controller.client',
        'editPageController':'views/page/controllers/page-edit.controller.client',
        'widgetsController':'views/widget/controllers/widget-list.controller.client',
        'chooseWidgetController':'views/widget/controllers/widget-new.controller.client',
        'editWidgetController':'views/widget/controllers/widget-edit.controller',
        'userFactory':'services/user.service.client'
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
            angular.bootstrap(document, ['WAM']);
        });

    });
});