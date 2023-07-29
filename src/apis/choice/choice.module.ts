import { Module } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { ChoiceController } from './choice.controller';
import { ChoiceRepository } from './choice.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from './entities/choice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Choice])],
  controllers: [ChoiceController],
  providers: [ChoiceService, ChoiceRepository],
})
export class ChoiceModule {}
