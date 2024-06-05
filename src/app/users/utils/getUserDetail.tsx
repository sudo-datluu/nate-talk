import { UserData } from '../types/User';

export async function getUserDetail(userID: any) : Promise<UserData> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
    const data = await res.json();
    return data;
}