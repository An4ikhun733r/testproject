import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(authPayload: AuthPayloadDto): Promise<string>;
}
