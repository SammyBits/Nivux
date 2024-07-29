import { API_URL } from "../const";
import { User } from "../models/user/UserModel";

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) 
        throw new Error('Failed to fetch users');
    
    const data = await response.json() as User[];

    if (!data)
        throw new Error('Failed to parse users');

    if (!Array.isArray(data))
        throw new Error('Invalid users data');

    return data
}


