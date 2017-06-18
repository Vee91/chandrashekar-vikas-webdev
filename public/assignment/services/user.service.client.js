define(['app'], function (app) {
    app.factory('UserService', function ($http) {
        var factory = {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            login: login,
            logout: logout,
            register: register,
        };

        function createUser(user) {
            var url = "/api/user/";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username=" + username + "&password=" + password;
            return $http.get(url).then(function (response) {
                return response.data;
            });
        }

        function findUserById(id) {
            var url = "/api/user/" + id;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findUserByUsername(name) {
            var url = "/api/user?username=" + name;
            return $http.get(url).then(function (response) {
                return response.data;
            });
        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
        }
        
        function register(user) {
            return $http.post("/api/register", user).then(
                function (response) {
                    return response.data;
                });
        }


        function login(user) {
            var url = "/api/login";
            return $http.post(url, user)
                .then(function (response) {
                    return response.data;
                });
        }
        
        function logout() {
            return $http.post("/api/logout");
        }

        return factory;
    });
});