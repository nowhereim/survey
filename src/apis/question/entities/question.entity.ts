import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Survey } from 'src/apis/survey/entities/survey.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  question: string;

  @IsNotEmpty()
  @IsNumber()
  @ManyToOne(() => Survey, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'surveyid', referencedColumnName: 'id' })
  surveyid: number;
}
