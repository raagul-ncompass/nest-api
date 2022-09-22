import { Test, TestingModule } from '@nestjs/testing';
import { WarrantyReturnService } from './warranty-return.service';

describe('WarrantyReturnService', () => {
  let service: WarrantyReturnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarrantyReturnService],
    }).compile();

    service = module.get<WarrantyReturnService>(WarrantyReturnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
