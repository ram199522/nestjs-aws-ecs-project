import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  findAll() {
    return this.taskService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ schema: { properties: { title: { type: 'string' } } } })
  create(@Body('title') title: string) {
    return this.taskService.create(title);
  }
}
