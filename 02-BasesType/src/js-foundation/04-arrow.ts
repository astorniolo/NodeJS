import { users,User } from "./users";

export const  getUserById=(id:number, callback: (err?: string, user?:User)=> void ) => {
   // users.find(user => user.id===id); funcion flecha que busca automaticamente
   // hagamos fn tradicional
  const user =  users.find( (user) =>  user.id===id);
   
  return (user 
    ?  callback(undefined, user) 
    :  callback(`USER not found with id ${id}`));
}

