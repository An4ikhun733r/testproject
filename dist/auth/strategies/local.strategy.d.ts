import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<string>;
}
export {};
