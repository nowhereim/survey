import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { elog } from 'src/logger/logger.middleware';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionRepository {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async create(createQuestionDto) {
    try {
      const result = await this.questionRepository.save(createQuestionDto);
      return result;
    } catch (e) {
      elog.error(e.name, e.stack || e.message);
      throw new HttpException(e, 400);
    }
  }
}
