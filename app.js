const Hapi = require('@hapi/hapi');

const handleRootRequest = require('./controllers/api');
const setRouteGet = require('./routes/getRoute');

const createServer = (defaultPort = 3000, defaultHost = 'localhost') => {
    return Hapi.server({
        port: defaultPort,
        host: defaultHost
    });
};

const server = createServer();

server.route(setRouteGet(handleRootRequest));

server.start();

module.exports = createServer;

