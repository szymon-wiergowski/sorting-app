const setRouteGet = (handler) => {
    return {
        method: 'GET',
        path: '/',
        handler
    }
};

module.exports = setRouteGet;
