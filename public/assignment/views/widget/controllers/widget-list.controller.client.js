define(['app', 'widgetFactory', 'wbdv-sortable'], function (app) {
    app.controller('widgetsCntrl',
        ['$routeParams', '$sce', 'WidgetService', 'currentUser', function ($routeParams, $sce, WidgetService, currentUser) {
            var vm = this;
            vm.userId = currentUser._id;
            vm.websiteId = $routeParams.wid;
            vm.pageId = $routeParams.pid;
            vm.widgetId = $routeParams.wgid;

            function init() {
                WidgetService.findWidgetsByPageId(vm.pageId)
                    .then(renderWidgets);
            }
            init();

            // Event handlers
            vm.trustHtml = trustHtml;
            vm.trustYoutube = trustYoutube;
            vm.trustImage = trustImage;
            vm.widgetUrl = widgetUrl;

            function widgetUrl(widget) {
                var url = 'views/widget/templates/widget-'+widget.type.toLowerCase()+'.view.client.html';
                return url;
            }

            function trustYoutube(linkUrl) {
                var embedUrl = "https://www.youtube.com/embed/";
                var linkUrlParts = linkUrl.split('/');
                embedUrl += linkUrlParts[linkUrlParts.length - 1];
                return $sce.trustAsResourceUrl(embedUrl);
            }

            function trustHtml(html) {
                return $sce.trustAsHtml(html);
            }

            function trustImage(url) {
                return $sce.trustAsResourceUrl(url);
            }

            function renderWidgets(widgets) {
                vm.widgets = widgets.sort(compare);
            }

            function compare(a,b) {
                if (a.order < b.order)
                    return -1;
                if (a.order > b.order)
                    return 1;
                return 0;
            }
        }]);
    return app;
});