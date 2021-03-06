define(['app'], function (app) {
    app.factory('WebsiteService', function ($http) {
        var factory = {
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            deleteWebsite: deleteWebsite,
            updateWebsite: updateWebsite,
        };

        function findWebsitesByUser(userId) {
            var url = "/api/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findWebsiteById(websiteId) {
            var url = "/api/website/" + websiteId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function createWebsite(userID, website) {
            var newWebsite = {
                name: website.name,
                _user: userID,
                description: website.desc
            };
            var url = "/api/user/"+userID+"/website";
            return $http.post(url, newWebsite)
                .then(function (response) {
                    return response.data;
                });
        }

        function deleteWebsite(userId, websiteId) {
            var url = "/api/user/"+userId+"/website/"+websiteId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/" + websiteId;
            return $http.put(url, website)
                .then(function (response) {
                    return response.data;
                });
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