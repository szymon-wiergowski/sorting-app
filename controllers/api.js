const Qs = require('qs');
const sortArray = require('../utils/sorting');

const handleRootRequest = (request, h) => {
    const responseObject = sortArray();
    return h.response(Qs.parse(responseObject)).code(200);
};

module.exports = handleRootRequest;