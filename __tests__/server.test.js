const app = require('../src/server/index')
const request = require("supertest");
const httpMocks = require('node-mocks-http');

describe('Test: POST /analyze', () => {
    it('gets avalid URL and should respond with 200 from the API', async done => {
        const req = httpMocks.createRequest({
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                text: "https://orf.at/stories/3169924/" 
            })
        });
        const res = httpMocks.createResponse();
        expect(res.statusCode).toBe(200);
        
        done();
    });
});