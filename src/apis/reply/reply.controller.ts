import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';

@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Post()
  async create(@Body() createReplyDto: CreateReplyDto) {
    console.log(createReplyDto);
    return await this.replyService.create(createReplyDto);
  }

  @Get()
  async findAll() {
    return this.replyService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.replyService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateReplyDto: UpdateReplyDto) {
  //   return this.replyService.update(+id, updateReplyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.replyService.remove(+id);
  // }
}
