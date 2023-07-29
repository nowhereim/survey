import { Body, Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { Survey } from './entities/survey.entity';
@Injectable()
export class SurveyRpository {
  constructor(
    @InjectRepository(Survey)
    private readonly surveyRpository: Repository<Survey>,
  ) {}
  @Post()
  create(@Body() createSurveyDto: CreateSurveyDto): any {
    const result = this.surveyRpository.save(createSurveyDto);
    return result;
  }
  findAll() {
    return `This action returns all survey`;
  }
  findOne(id) {
    return `This action returns a #${id} survey`;
  }
  update(id, updateSurveyDto) {
    return `This action updates a #${id} survey`;
  }
  remove(id) {
    return `This action removes a #${id} survey`;
  }
}
