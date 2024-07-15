// src/user/user.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('api/v1')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add-user')
  async addUser(
    @Body()
    body: {
      name: string;
      email: string;
      phone: string;
      password: string;
    },
  ): Promise<User> {
    const { name, email, phone, password } = body;
    const user = await this.userService.addUser(name, email, phone, password);
    console.log(user);
    return user;
  }

  @Get('get-user/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getUser(id);
  }
}
