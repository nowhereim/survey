import { Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';
import { ReplyRepository } from './reply.repository';

@Injectable()
export class ReplyService {
  constructor(private readonly replyRepository: ReplyRepository) {}
  async create(createReplyDto: CreateReplyDto) {
    const result = await this.replyRepository.create(createReplyDto);
    return result;
  }

  async findAll() {
    const result = await this.replyRepository.findAll();
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} reply`;
  }

  update(id: number, updateReplyDto: UpdateReplyDto) {
    return `This action updates a #${id} reply`;
  }

  remove(id: number) {
    return `This action removes a #${id} reply`;
  }
}
