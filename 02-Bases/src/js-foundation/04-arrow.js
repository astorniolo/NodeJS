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

const  getUserById=(id, callback) => {
   // users.find(user => user.id===id); funcion flecha que busca automaticamente
   // hagamos fn tradicional
  const user =  users.find( (user) =>  user.id===id);
   
  return (user 
    ?  callback(null, user) 
    :  callback(`USER not found with id ${id}`));
}

module.exports = {
    getUserById
}