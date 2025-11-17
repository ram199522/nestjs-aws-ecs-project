import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Task } from './task/task.entity';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';

// Load .env first, before anything else
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST as string,
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER as string,
      password: process.env.DB_PASS as string, // <- must be string
      database: process.env.DB_NAME as string,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Task]), // register your entities here
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule {}
