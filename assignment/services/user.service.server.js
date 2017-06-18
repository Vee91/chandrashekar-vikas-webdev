module.exports = function (model) {
    var app = require('../../express');

    var passport = require('passport');

    var facebookConfig = {
        clientID     : process.env.FACEBOOK_CLIENT_ID,
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL  : process.env.FACEBOOK_CALLBACK_URL
    };

    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;
    passport.use(new LocalStrategy(localStrategy));
    passport.use('facebook', new FacebookStrategy(facebookConfig, facebookStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    app.post('/api/register', register);
    app.post('/api/login', passport.authenticate('local'), login);
    app.post('/api/logout', logout);
    app.get('/api/loggedin', loggedin);
    app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/assignment/ph/profile',
            failureRedirect: '/assignment'
        }));
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);
    app.get('/api/user', findAllUsers);
    app.post('/api/user', createUser);

    var userModel = model.userModel;

    function findAllUsers(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        if (username && password) {
            findUserByCredentials(req, res);
        }
        else if (username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        userModel.findUserByUsername(req.query['username'])
            .then(function (user) {
                if (user) {
                    res.send(user);
                }
                else {
                    res.send('NotFound');
                }
            }),
            function (error) {
                res.sendStatus(500).send(err);
            }
    }

    function findUserByCredentials(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        userModel.findUserByCredentials(username, password)
            .then(function (user) {
                res.send(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function findUserById(req, res) {
        var userId = req.params.uid;
        userModel.findUserById(userId)
            .then(function (user) {
                res.send(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function updateUser(req, res) {
        var userId = req.params.uid;
        var newUser = req.body;
        userModel.updateUser(userId, newUser)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function createUser(req, res) {
        var newUser = req.body;
        userModel.createUser(newUser)
            .then(function (user) {
                res.send(user);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function deleteUser(req, res) {
        var userId = req.params.uid;
        userModel.deleteUser(userId)
            .then(function (status) {
                res.send(status);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }

    function register(req, res) {
        var user = req.body;
        userModel
            .createUser(user).then(
            function (user) {
                if (user) {
                    req.login(user, function (err) {
                        if (err) {
                            res.sendStatus(400).send(err);
                        } else {
                            res.json(user);
                        }
                    });
                }
            }
        );
    }


    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function loggedin(req, res) {
        res.send(req.session.passport.user);
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function (user) {
                    done(null, user);
                },
                function (err) {
                    done(err, null);
                }
            );
    }


    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials(username, password)
            .then(function (user) {
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            }, function (error) {
                done(error, false);
            });
    }

    function facebookStrategy(token, refreshToken, profile, done) {
        userModel
            .findUserByFacebookId(profile.id)
            .then(function (user) {
                    if(user){
                        return done(null, user);
                    }else{
                        var displayName = profile.displayName.split(" ");
                        var newFacebookUser = {
                            username : displayName[0],
                            firstName: displayName[0],
                            lastName: displayName[1],
                            facebook: {
                                id: profile.id,
                                token: token
                            }
                        };
                        return userModel.createUser(newFacebookUser);
                    }
                },
                function (err) {
                    if(err){
                        return done(err);
                    }
                })
            .then(
                function (user) {
                    return done(null, user);
                },
                function (err) {
                    if(err){
                        return done(err);
                    }
                }
            );
    }
}
