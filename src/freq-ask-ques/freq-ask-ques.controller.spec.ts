import { Test, TestingModule } from '@nestjs/testing';
import { FreqAskQuesController } from './freq-ask-ques.controller';

describe('FreqAskQuesController', () => {
  let controller: FreqAskQuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FreqAskQuesController],
    }).compile();

    controller = module.get<FreqAskQuesController>(FreqAskQuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
