import { app } from '../app.mjs';
import request from 'supertest';
import { assert } from 'node:assert';

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
    const response = await request(server).post('/').send('name=John&age=20');

    assert.deepStrictEqual(Object.keys(response.body), [
      'method',
      'headers',
      'body',
    ]);
    assert.deepStrictEqual(response.body.method, 'POST');
    assert.deepStrictEqual(response.body.body, {
      name: 'John',
      age: '20',
    });
  });

  it('should load multiple fields with same name as array', async () => {
    const response = await request(server)
      .post('/')
      .send('name=value1&name=value2');

    assert.deepStrictEqual(response.body.body, {
      name: ['value1', 'value2'],
    });
  });
});
