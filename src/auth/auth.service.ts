import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/user.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async validateUser({
    username,
    password,
  }: AuthPayloadDto): Promise<string | null> {
    const user = await this.userModel.findOne({
      where: {
        name: username,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
      return;
    }

    if (password == user.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userr } = user;
      return this.jwtService.sign(userr);
    } else {
      throw new UnauthorizedException('Invalid credentials');
      return;
    }
  }
}
