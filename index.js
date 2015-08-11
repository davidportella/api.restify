var restify = require("restify");

var server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(9008, function () {
    console.log("Basic server started successfully...");
    console.log('%s listening at %s', server.name, server.url);
});
