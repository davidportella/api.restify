var restify = require("restify"),
    config  = require("config")
    ;

var server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(config.get('port'), function () {
    console.log("Basic server started successfully...");
    console.log('%s listening at %s', server.name, server.url);
});
