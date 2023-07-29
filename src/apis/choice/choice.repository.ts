import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { elog } from 'src/logger/logger.middleware';
import { Repository } from 'typeorm';
import { Choice } from './entities/choice.entity';

@Injectable()
export class ChoiceRepository {
  constructor(
    @InjectRepository(Choice)
    private readonly choiceRepository: Repository<Choice>,
  ) {}

  async create(createChoiceDto) {
    try {
      const result = await this.choiceRepository.save(createChoiceDto);
      return result;
    } catch (e) {
      elog.error(e.name, e.stack || e.message);
      throw new HttpException(e, 400);
    }
  }
}
