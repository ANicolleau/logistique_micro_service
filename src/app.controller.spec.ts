import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('pong', () => {
    it('should return "Pong !"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getHello()).toBe('Pong !');
    });
  });
});
