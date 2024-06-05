import { UserData } from '../types/User';
export async function getUsers() : Promise<UserData[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}