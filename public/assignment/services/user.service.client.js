define(['app'], function (app) {
    app.factory('UserService', function ($http) {
        var factory = {
            createUser: createUser,
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            deleteUser: deleteUser,
            updateUser: updateUser,
        };

        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice.wonder@gmail.com"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email:"bob.marley@gmail.com"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email:"charly.garcia@gmail.com"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email:"j.annunzi@gmail.com"}
        ];

        function createUser(user) {
            users.push(user);
            return users;
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

        function deleteUser(userId) {
            for (var u in users) {
                if (users[u]._id === userId) {
                    users.splice(u, 1);
                    return true;
                }
            }
            return false;
        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
        }

        return factory;
    });
});