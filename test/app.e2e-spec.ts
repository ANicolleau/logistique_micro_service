import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return pong with code 200.', () => {
    return request(app.getHttpServer())
      .get('/api/ping')
      .expect(200)
      .expect('Pong !');
  });

  it('should return code 204 on product supply', () => {
    return request(app.getHttpServer())
        .post('/api/supply')
        .expect(204)
  })
});
