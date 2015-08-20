var dummy = function (server) {

    server.get('/dummy/get/', function (req, res, next) {

        res.send({dummy: true});

    });

};

module.exports = dummy;
