var app = require('../../express')

var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email:"alice.wonder@gmail.com"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email:"bob.marley@gmail.com"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email:"charly.garcia@gmail.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email:"j.annunzi@gmail.com"}
];

app.get('/api/user/:userId', findUserById);
app.put('/api/user/:userId', updateUser);
app.delete('/api/user/:userId', deleteUser);
app.get('/api/user', findAllUsers);
app.post('/api/user', createUser);

function findUserById(req, res) {
    var id = req.params.userId;
    for (var u in users) {
        if (users[u]._id === id) {
            res.send(users[u]);
            return;
        }
    }
    res.sendStatus(404);
}

function findAllUsers(req, res) {
    var username = req.query.username;
    var password = req.query.password;
    if (username && password) {
        for (var u in users) {
            if (users[u].username === username && users[u].password === password) {
                res.json(users[u]);
                return;
            }
        }
        res.sendStatus(404);
    }
    else if (username) {
        for (var j in users) {
            if (users[j].username === name) {
                res.json(users[j]);
                return;
            }
        }
        res.sendStatus(404);
    }
    else {
        res.json(users);
    }

}

function updateUser(req, res) {
    var user = req.body;
    for (var u in users) {
        if (users[u]._id === req.params.userId) {
            users[u] = user;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function createUser(req, res) {
    var user = req.body;
    user._id = generateUUID();
    users.push(user);
    res.json(user);
}

function deleteUser(req, res) {
    var id = req.params.userId;
    for (var u in users) {
        if (users[u]._id === id) {
            users.splice(u, 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
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
}