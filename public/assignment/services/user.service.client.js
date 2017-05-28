define(['app'], function (app) {
    app.factory('UserService', function () {
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
            for (var u in users) {
                if (users[u].username === username && users[u].password === password) {
                    return users[u];
                }
            }
        }

        function findUserById(id) {
            for (var u in users) {
                if (users[u]._id === id) {
                    return users[u];
                }
            }
            return null;
        }

        function findUserByUsername(name){
            for (var u in users) {
                if (users[u].username === name) {
                    return users[u];
                }
            }
            return null;
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

        function updateUser(user) {
            for (var u in users) {
                if (users[u]._id === user._id) {
                    users[u].username = user.username;
                    users[u].firstName = user.firstName;
                    users[u].lastName = user.lastName;
                    users[u].email = user.email;
                }
            }
        }

        return factory;
    });
});