import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  findAll() {
    return this.taskRepo.find();
  }

  create(title: string) {
    const task = this.taskRepo.create({ title });
    return this.taskRepo.save(task);
  }
}
