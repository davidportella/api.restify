var restify = require("restify");

var base_path = '/auth/basic/';

function authGet(req, res, next) {

    if ("secret_centinela" !== req.authorization.basic.password)
        return next(new restify.NotAuthorizedError("Password is incorrect"));

    return next();
}

var basic = function (server) {
    server.get({path: base_path + 'get'}, authGet);
};

module.exports = basic;
