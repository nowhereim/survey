import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Choice } from 'src/apis/choice/entities/choice.entity';
import { Survey } from 'src/apis/survey/entities/survey.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Reply {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ManyToOne(() => Survey, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'surveyid', referencedColumnName: 'id' })
  @Index()
  surveyid: number;

  @IsNotEmpty()
  @IsNumber()
  @ManyToOne(() => Choice, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'choiceid' })
  @Index()
  choiceid: number;
}
