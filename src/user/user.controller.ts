import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}
  @Get()
  getUsers(): any {
    const db = this.configService.get('db');

    console.log('dbTest', db);
    return this.userService.getUsers();
  }

  @Post()
  addUsers(): any {
    return this.userService.addUsers();
  }

  @Post()
  deleteUsers(): any {
    return this.userService.addUsers();
  }
}
