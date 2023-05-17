`use strict`;

const supertest = require('supertest');
const { app } = require('../src/server.js');
const request = supertest(app);

describe('Validator', () => {
  it('Should return 500 if no name in the query string', async () => {
    const response = await request.get('/person').query({ name: '' });
    expect(response.status).toEqual(500);
  });

  it('Should return 200 if name is in the query string', async () => {
    const response = await request.get('/person?name=Ryan');
    expect(response.status).toEqual(200);
  });
});








