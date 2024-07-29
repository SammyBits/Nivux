import { JWT } from "../../models/user/auth/JwtModel";
import { UserLoginModel } from "../../models/user/auth/UserLoginModel";
import { fetchUsers } from "../UserServices";
import { createJwt } from "./JwtServices";

export const login = async (user: UserLoginModel): Promise<JWT> => {
    const {email, password} = user;
    
    if(!email)
        throw new Error('Email is required');

    if(!password)
        throw new Error('Password is required');
    
    const users = await fetchUsers();

    if (!users)
        throw new Error('Failed to fetch users');
    
    const match = users.find(user => user.email === user.email && user.password === password);
    if (!match) 
        throw new Error('Invalid credentials');

    const response = await createJwt(email, password);

    return response;

}