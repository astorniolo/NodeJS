// const {emailTemplate} = require('./js-foundation/01-template')    //esto se ejecuta
// const { getUserById } = require('./js-foundation/04-arrow')

// console.log("Hola mundo ...desde app.js")

// console.log(emailTemplate);
//-----------------------------------------------------

//recibimos el archivo de 02
// require('./js-foundation/02-destructuring')  //recuerden estamos ejecutando el archivo que tiene esa fn
//------------------------------------------------------------

// vemos ahora callbacks
//require('./js-foundation/03-callbacks')
// const id=2;
// getUserById(id, (error, user) => {
//     if (error){
//         throw new Error(error);
//     }
//     console.log(user);
// });
//------------------------------------------
// ! referencia a la funcion factory y uso
// intentamos 0 dependencia
// const { buildMakePerson } = require('./js-foundation/05-factory_function')
// const { getAge, getUUID } = require('./pluggins')  

// const  makePerson= buildMakePerson({getUUID, getAge});

// const obj={name: 'John', birthdate: '1967-09-08'};
// const john=makePerson(obj);
// console.log(john);
//---------------------------------------

// PROMISES
// const getPokemonById = require('./js-foundation/06-promise');

// getPokemonById(1)
//     .then((pokemon)=> console.log({pokemon}))
//     .catch((err)=>console.log('Por favor intente de nuevo'))
//     .finally(()=>console.log('final'))
//------------------------------------------------------------------

// ! referencia  logguers winston
 const {buid_logger} = require('./pluggins');

 const logger = buid_logger('app.js');

 logger.log('holamundo');
 logger.error('bu holamundo');