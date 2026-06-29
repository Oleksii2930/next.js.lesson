import {IUser} from "@/app/models/IUser";


export const getAllUsers = async ():Promise<IUser[]> => {
  const users =  await fetch('http://jsonplaceholder.typicode.com/users')
      .then(value => value.json());
return users;

}