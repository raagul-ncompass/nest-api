import { Test, TestingModule } from '@nestjs/testing';
import { WarrantyReturnController } from './warranty-return.controller';

describe('WarrantyReturnController', () => {
  let controller: WarrantyReturnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarrantyReturnController],
    }).compile();

    controller = module.get<WarrantyReturnController>(WarrantyReturnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
