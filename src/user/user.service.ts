// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async addUser(
    name: string,
    email: string,
    phone: string,
    password: string,
  ): Promise<User> {
    const user = new User({ name, email, phone, password });
    return user.save();
  }

  async getUser(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }
}
