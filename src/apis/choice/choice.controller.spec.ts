import { Test, TestingModule } from '@nestjs/testing';
import { ChoiceController } from './choice.controller';
import { ChoiceService } from './choice.service';

describe('ChoiceController', () => {
  let controller: ChoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChoiceController],
      providers: [ChoiceService],
    }).compile();

    controller = module.get<ChoiceController>(ChoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
