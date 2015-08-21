var base_path = '/dummy/';

function dummyGet(req, res, next) {
    res.send({dummy: true});
    return next();
}

var send_version = ':name';

function sendV1(req, res, next) {
    res.send('hello: ' + req.params.name);
    return next();
}

function sendV2(req, res, next) {
    res.send({hello: req.params.name});
    return next();
}

var dummy = function (server) {
    server.get({path: base_path + 'get'}, dummyGet);
    server.get({path: base_path + send_version, version: '1.1.3'}, sendV1);
    server.get({path: base_path + send_version, version: '2.0.0'}, sendV2);
};

module.exports = dummy;
