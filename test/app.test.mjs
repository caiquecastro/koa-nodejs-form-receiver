import { app } from '../app.mjs';
import request from 'supertest';
import { strict as assert } from 'node:assert';

describe('App', () => {
    let server;

    before(() => {
        server = app.listen();
        console.log = () => {};
    });

    after(() => {
        server.close();
    });

    it('should load all parameters from body', async () => {
        const response = await request(server)
            .post('/')
            .type('form')
            .send('name=value1&name=value2');

        assert.deepEqual(response.body, {
            name: ['value1', 'value2'],
        });
    });
});