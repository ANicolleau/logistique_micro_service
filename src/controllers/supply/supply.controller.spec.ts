import { Test, TestingModule } from '@nestjs/testing';
import {SupplyController} from "./supply.controller";

describe('SupplyController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [SupplyController],
      providers: [],
    }).compile();
  });

  describe('/supply', () => {
    it('should call the stock endpoint to add supplies', () => {
      const supplyController = app.get<SupplyController>(SupplyController);
      expect(supplyController.addSupply()).toBe('Pong !');
    });
  });
});
