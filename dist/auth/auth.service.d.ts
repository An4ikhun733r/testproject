import { AuthPayloadDto } from './dto/auth.dto';
import { User } from 'src/user/user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: typeof User, jwtService: JwtService);
    validateUser({ username, password, }: AuthPayloadDto): Promise<string | null>;
}
