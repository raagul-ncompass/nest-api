import { Test, TestingModule } from '@nestjs/testing';
import { FreqAskQuesService } from './freq-ask-ques.service';

describe('FreqAskQuesService', () => {
  let service: FreqAskQuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreqAskQuesService],
    }).compile();

    service = module.get<FreqAskQuesService>(FreqAskQuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
