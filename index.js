var restify = require("restify"),
    config = require("config")
    ;

var server = restify.createServer();

// Params HTTP
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Auth basic
server.use(restify.authorizationParser());

// Load API Modules Or shortcut require('./api/dummy')(server);
var dummy = require("./api/dummy");
dummy(server);
var basic = require("./api/auth/basic");
basic(server);

server.listen(config.get('port'), function () {
    console.log("Basic server started successfully...");
    console.log('%s listening at %s', server.name, server.url);
});
