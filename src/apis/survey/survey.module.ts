import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { SurveyRpository } from './survey.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  controllers: [SurveyController],
  providers: [SurveyService, SurveyRpository],
})
export class SurveyModule {}
