import { Injectable } from '@nestjs/common';
import { ChoiceRepository } from './choice.repository';
import { CreateChoiceDto } from './dto/create-choice.dto';
import { UpdateChoiceDto } from './dto/update-choice.dto';

@Injectable()
export class ChoiceService {
  constructor(private readonly choiceRepository: ChoiceRepository) {}
  async create(createChoiceDto: CreateChoiceDto) {
    const result = await this.choiceRepository.create(createChoiceDto);
    return result;
  }

  findAll() {
    return `This action returns all choice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} choice`;
  }

  update(id: number, updateChoiceDto: UpdateChoiceDto) {
    return `This action updates a #${id} choice`;
  }

  remove(id: number) {
    return `This action removes a #${id} choice`;
  }
}
