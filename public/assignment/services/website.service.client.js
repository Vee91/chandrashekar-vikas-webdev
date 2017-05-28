define(['app'], function (app) {
    app.factory('WebsiteService', function () {
        var factory = {
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            deleteWebsite: deleteWebsite,
            updateWebsite: updateWebsite,
        };

        var websites = [
            {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
            {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
        ];

        function findWebsitesByUser(userId) {
            var result = [];
            for (var w in websites) {
                if (websites[w].developerId == userId) {
                    result.push(websites[w]);
                }
            }
            return result;
        }

        function findWebsiteById(websiteId) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    return websites[w]
                }
            }
            return null;
        }

        function createWebsite(userID, website) {
            var wid = generateUUID();
            var newWebsite = {
                _id: wid,
                name: website.name,
                developerId: userID,
                description: website.desc
            };
            websites.push(newWebsite);
            return findWebsitesByUser(userID);
        }

        function deleteWebsite(websiteId) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites.splice(w, 1);
                    return true;
                }
            }
            return false;
        }

        function updateWebsite(websiteId, website) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites[w].name = website.name;
                    websites[w].description = website.description
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

        return factory;
    });
})
;