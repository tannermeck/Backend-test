const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('Test routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodiac should return all signs', async () => {
    const signs = await request(app).get('/zodiac');
    console.log(signs.body);
    expect(signs.body).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(String),
          name: expect.any(String),
        },
      ])
    );
  });

  afterAll(() => {
    pool.end();
  });
});
