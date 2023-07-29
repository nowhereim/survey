import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { SurveyRpository } from './survey.repository';

@Injectable()
export class SurveyService {
  constructor(private readonly surveyRepository: SurveyRpository) {}
  async create(createSurveyDto: CreateSurveyDto) {
    const result = await this.surveyRepository.create(createSurveyDto);
    return result;
  }

  findAll() {
    return `This action returns all survey`;
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }
}
