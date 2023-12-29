const expect = require('chai').expect;

const createServer = require('../app');
const handleRootRequest = require('../controllers/api');
const setRouteGet = require('../routes/getRoute');


describe('API Tests', () => {
    let server;

    before(async () => {
        server = await createServer(3001); // Use a different port for testing
        server.route(setRouteGet(handleRootRequest));

        await server.start();
    });

    after(async () => {
        await server.stop();
    });

    it('should return valid data for GET request to /', async () => {
        const options = {
            method: 'GET',
            url: '/'
        };

        const response = await server.inject(options);
        const data = JSON.parse(response.payload);

        const firstElement = data['0'];
        const lastElement = data['10'];

        expect(response.statusCode).to.equal(200);
        expect(response.headers['content-type']).to.include('application/json');
        expect(firstElement).to.equal(0);
        expect(lastElement).to.equal('test string');
    });
});
