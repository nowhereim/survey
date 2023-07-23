import { Test, TestingModule } from '@nestjs/testing';
import { ChoiceService } from './choice.service';

describe('ChoiceService', () => {
  let service: ChoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChoiceService],
    }).compile();

    service = module.get<ChoiceService>(ChoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
