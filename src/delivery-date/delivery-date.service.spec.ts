import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryDateService } from './delivery-date.service';

describe('DeliveryDateService', () => {
  let service: DeliveryDateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryDateService],
    }).compile();

    service = module.get<DeliveryDateService>(DeliveryDateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
