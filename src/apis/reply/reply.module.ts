import { Module } from '@nestjs/common';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reply } from './entities/reply.entity';
import { ReplyRepository } from './reply.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Reply])],
  controllers: [ReplyController],
  providers: [ReplyService, ReplyRepository],
})
export class ReplyModule {}
