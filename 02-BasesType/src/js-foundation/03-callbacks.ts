import { users,User } from "./users";



export function getUserById(id:number, callback: (err?: string, user?:User)=> void ) {
   // users.find(user => user.id===id); funcion flecha que busca automaticamente
   // hagamos fn tradicional
  const user =  users.find( function (user){
       return user.id===id; 
   });
   
   if (!user) {
    return callback(`USER not found with id ${id}`);
   }

   return callback(undefined, user);
}


