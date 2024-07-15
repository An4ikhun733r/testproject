import { UserService } from './user.service';
import { User } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    addUser(body: {
        name: string;
        email: string;
        phone: string;
        password: string;
    }): Promise<User>;
    getUser(id: number): Promise<User>;
}
