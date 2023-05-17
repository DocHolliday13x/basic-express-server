`use strict`;

const supertest = require('supertest');
const { app } = require('../src/server.js');
const request = supertest(app);

describe('Testing API server', () => {
  test('Should handle invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  // test('Should handle bad routes', async () => {
  //   const response = await request.get('/foo');
  //   expect(response.status).toEqual(404);
  // });

  test('Should handle bad methods', async () => {
    const response = await request.put('/foo');
    expect(response.status).toEqual(404);
  });

  // test('Should handle valid requrests', async () => {
  //   const response = await request.get('/');
  //   expect(response.status).toEqual(200);
  //   expect(response.text).toEqual('Hello World');
  // });

  test('Should return desired output object', async () => {
    const response = await request.get('/person?name=Ryan');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'Ryan' });
  });
});

// query errors will be handled by validator middleware
