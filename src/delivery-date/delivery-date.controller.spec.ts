import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryDateController } from './delivery-date.controller';

describe('DeliveryDateController', () => {
  let controller: DeliveryDateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryDateController],
    }).compile();

    controller = module.get<DeliveryDateController>(DeliveryDateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
