const users = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    }
  ];

function getUserById(id, callback){
   // users.find(user => user.id===id); funcion flecha que busca automaticamente
   // hagamos fn tradicional
  const user =  users.find( function (user){
       return user.id===id; 
   });
   
   if (!user) {
    return callback(`USER not found with id ${id}`);
   }

   return callback(null, user);
}



module.exports = {
    getUserById
}