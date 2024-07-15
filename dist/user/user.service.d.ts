import { User } from './user.model';
export declare class UserService {
    private userModel;
    constructor(userModel: typeof User);
    addUser(name: string, email: string, phone: string, password: string): Promise<User>;
    getUser(id: number): Promise<User>;
}
