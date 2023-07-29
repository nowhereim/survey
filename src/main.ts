import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { wlog } from './logger/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new HttpExceptionFilter()); // FIXME: 필요 없음
  await app.listen(3000);
  wlog.warn(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
