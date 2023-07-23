import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SurveyModule } from './apis/survey/survey.module';
import { ChoiceModule } from './apis/choice/choice.module';
import { QuestionModule } from './apis/question/question.module';
import { ReplyModule } from './apis/reply/reply.module';
import { QuestionModule } from './apis/question/question.module';
import { SurveyModule } from './apis/survey/survey.module';
import { ChoiceModule } from './apis/choice/choice.module';
import { ReplyModule } from './apis/reply/reply.module';

@Module({
  imports: [SurveyModule, ChoiceModule, QuestionModule, ReplyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
