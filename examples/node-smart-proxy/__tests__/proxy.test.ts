import supertest from 'supertest';

describe('Proxy', () => {
  test('status endpoint', async () => {
    const { app } = require('../src/index.ts');

    const response = await supertest(app)
      .post('/api/status')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({});

    expect(response.status).toEqual(200);
    expect(response.headers).toHaveProperty('response-time');
    expect(response.headers).toHaveProperty('vizzly-query-engine-request-id');
    expect(response.headers['vizzly-query-engine-strategy']).toEqual('dynamic');
    expect(response.headers['content-type']).toEqual(expect.stringContaining('application/json'));

    expect(response.body).toEqual({
       "allowGetStarted": null,
       "client": "postgres",
       "configFound": true,
       "configSources": {
         "connection": "environment",
         "dataSets": [],
         "saveLocations": [
           "file",
           "vizzlyEncrypted",
         ],
       },
       "configValid": true,
       "connectionOk": true,
       "dataSetsCount": 1,
       "message": "Ready to accept queries",
       "version": expect.any(String),
    })
  });
});



// const databaseConnectionCredentials = await encrypt<DbConnectionContent>({
//   expires: addMinutes(new Date(), 1).toISOString(),
//   credentials: {
//     password: 'customer',
//     database: 'my_database',
//     user: 'customer',
//     host: '0.0.0.0',
//     port: 7405,
//   },
// });

