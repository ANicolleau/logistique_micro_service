import { Test, TestingModule } from '@nestjs/testing';
import {PingController} from "../controllers/ping/ping.controller";

describe('PingController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PingController],
      providers: [],
    }).compile();
  });

  describe('/ping', () => {
    it('should return "Pong !"', () => {
      const pingController = app.get<PingController>(PingController);
      expect(pingController.ping()).toBe('Pong !');
    });
  });
});
