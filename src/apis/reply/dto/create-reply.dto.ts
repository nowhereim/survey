import { OmitType, PickType } from '@nestjs/mapped-types';
import { Reply } from '../entities/reply.entity';

export class CreateReplyDto extends Reply {}
