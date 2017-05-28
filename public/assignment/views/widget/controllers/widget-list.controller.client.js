define(['app', 'widgetFactory'], function (app) {
    app.controller('widgetsCntrl',
        ['$routeParams', '$sce', 'WidgetService', function ($routeParams, $sce, WidgetService) {
            var vm = this;
            vm.userId = $routeParams.uid;
            vm.websiteId = $routeParams.wid;
            vm.pageId = $routeParams.pid;
            vm.widgetId = $routeParams.wgid;

            function init() {
                vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
            }
            init();

            // Event handlers
            vm.trustHtml = trustHtml;
            vm.trustYoutube = trustYoutube;
            vm.trustImage = trustImage;
            vm.widgetUrl = widgetUrl;

            function widgetUrl(widget) {
                var url = 'views/widget/templates/widget-'+widget.widgetType.toLowerCase()+'.view.client.html';
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
        }]);
    return app;
});