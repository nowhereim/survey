import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SurveyModule } from './apis/survey/survey.module';
import { ChoiceModule } from './apis/choice/choice.module';
import { QuestionModule } from './apis/question/question.module';
import { ReplyModule } from './apis/reply/reply.module';
import { DB } from './config/postgrepsql.config';
import { LoggerMiddleware } from './logger/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SurveyModule,
    ChoiceModule,
    QuestionModule,
    ReplyModule,
    TypeOrmModule.forRoot(DB),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
