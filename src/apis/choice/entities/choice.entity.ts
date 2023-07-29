import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Question } from 'src/apis/question/entities/question.entity';

@Entity()
export class Choice {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  choice: string;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  score: number;

  @IsNotEmpty()
  @IsNumber()
  @ManyToOne(() => Question, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @Index()
  @JoinColumn({ name: 'questionid', referencedColumnName: 'id' })
  questionid: number;
}
