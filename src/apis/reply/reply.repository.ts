import { HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { elog } from 'src/logger/logger.middleware';
import { Repository } from 'typeorm';
import { CreateReplyDto } from './dto/create-reply.dto';
import { Reply } from './entities/reply.entity';
import { ReplyAccData, ReplyCurData } from './interface/reply.interface';

export class ReplyRepository {
  constructor(
    @InjectRepository(Reply)
    private readonly replyRepository: Repository<Reply>,
  ) {}

  async create(createReplyDto: CreateReplyDto) {
    try {
      const result = await this.replyRepository.save(createReplyDto);
      return result;
    } catch (e) {
      elog.error(e.name, e.stack || e.message);
      throw new HttpException(e, 400);
    }
  }

  async findAll() {
    try {
      const result: any = await this.replyRepository.find({
        relations: ['choiceid.questionid.surveyid'],
      });
      const returnData = result.reduce(
        (acc: ReplyAccData, cur: ReplyCurData): ReplyAccData => {
          if (!acc.find((ojbInAcc) => ojbInAcc.name === cur.name)) {
            acc.push({
              name: cur.name,
              surveyName: cur.choiceid.questionid.surveyid.name,
              surveyDescription: cur.choiceid.questionid.surveyid.description,
              response: [
                {
                  question: cur.choiceid.questionid.question,
                  choice: cur.choiceid.choice,
                },
              ],
              totalScore: cur.choiceid.score,
            });
          } else {
            const index = acc.findIndex(
              (ojbInAcc: ReplyCurData) => ojbInAcc.name === cur.name,
            );
            acc[index].response.push({
              question: cur.choiceid.questionid.question,
              choice: cur.choiceid.choice,
            });
            acc[index].totalScore += cur.choiceid.score;
          }
          return acc;
        },
        [],
      );
      return returnData;
    } catch (e) {
      elog.error(e.name, e.stack || e.message);
      throw new HttpException(e, 400);
    }
  }
}
