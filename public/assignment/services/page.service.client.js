define(['app'], function (app) {
    app.service('PageService', function () {
        this.createPage = createPage;
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        var pages = [
            {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
            {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
            {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}];

        function createPage(websiteId, page) {
            var pid = generateUUID();
            var newPage = {_id: pid, name: page.name, websiteId: websiteId, description: page.description}
            pages.push(newPage);
            return findPageByWebsiteId(websiteId);
        }

        function findPageByWebsiteId(websiteId) {
            var result = [];
            for (var p in pages) {
                if (pages[p].websiteId === websiteId) {
                    result.push(pages[p]);
                }
            }
            return result;
        }

        function findPageById(pageId) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    return pages[p]
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages[p].name = page.name;
                    pages[p].description = page.description;
                    return true;
                }
            }
            return false;
        }

        function deletePage(pageId) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages.splice(p, 1);
                    return true;
                }
            }
            return false;
        }

        function generateUUID() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now();
            }
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };

    });
});