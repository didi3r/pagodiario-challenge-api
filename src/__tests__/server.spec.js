import request from 'supertest';
import { app } from '../server';

/*
 * These test are meant to test the actual Endpoints
 */

describe('API', () => {
  describe('Endpoints', () => {
    describe('User', () => {
      /* Should contain at least the 2 records saved on the test initialization
       * (See test-db-setup.js)
       */
      test('GET /api/v1/user', async done => {
        const response = await request(app).get('/api/v1/user');
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject([
          {
            name: 'Jose',
            middleName: 'Perez',
            lastName: 'Leon',
            rfc: 'XAXX010101000',
            birthDate: '1990-01-01T06:00:00.000Z'
          },
          {
            name: 'Maria',
            middleName: 'Guadalupe',
            lastName: 'Reyes',
            rfc: 'XAXX010101001',
            birthDate: '1990-01-01T06:00:00.000Z'
          }
        ]);
        done();
      });

      /* POSTs a new record to the endpoint and checks if it was saved */
      test('POST /api/v1/user', async done => {
        const response = await request(app)
          .post('/api/v1/user')
          .send({
            name: 'Didier',
            middleName: 'Perez',
            lastName: 'Cortes',
            rfc: 'XAXX010101003',
            birthDate: '1990-01-01T06:00:00.000Z'
          });
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({
          name: 'Didier',
          middleName: 'Perez',
          lastName: 'Cortes',
          rfc: 'XAXX010101003',
          birthDate: '1990-01-01T06:00:00.000Z'
        });
        done();
      });

      /* Tests the GET endpoint with a specific pre-saved record
       * (See test-db-setup.js)
       */
      test('GET /api/v1/user/:id', async done => {
        const response = await request(app).get(
          '/api/v1/user/' + global.savedId
        );
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({
          name: 'Jose',
          middleName: 'Perez',
          lastName: 'Leon',
          rfc: 'XAXX010101000',
          birthDate: '1990-01-01T06:00:00.000Z'
        });
        done();
      });

      /* Tests the PUT (update) endpoint on a pre-saved record
       * (See test-db-setup.js)
       */
      test('PUT /api/v1/user/:id', async done => {
        const response = await request(app)
          .put('/api/v1/user/' + global.savedId)
          .send({
            name: 'JOSE',
            middleName: 'PEREZ',
            lastName: 'LEON',
            rfc: 'XAXX010101111',
            birthDate: '1990-01-01T06:00:00.000Z'
          });
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({
          name: 'JOSE',
          middleName: 'PEREZ',
          lastName: 'LEON',
          rfc: 'XAXX010101111',
          birthDate: '1990-01-01T06:00:00.000Z'
        });
        done();
      });

      /* Tests the DELETE endpoint on a pre-saved record
       * (See test-db-setup.js)
       */
      test('DELETE /api/v1/user/:id', async done => {
        const response = await request(app).delete(
          '/api/v1/user/' + global.savedId
        );
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject({ deletedCount: 1 });
        done();
      });
    });
  });
});
