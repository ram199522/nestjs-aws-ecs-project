import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Learn NestJS' })
  @Column()
  title: string;

  @ApiProperty({ example: false })
  @Column({ default: false })
  completed: boolean;
}
