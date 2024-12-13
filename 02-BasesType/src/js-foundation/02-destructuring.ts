//console.log(process);
// process es un pcs de node que estaa corriendo tiene mucha info de la comp, 
// de los pcs ejecutando, librerias que se estan ejecutando, versiones de node 
// argumentos que se recibieron de afuera ..... muchas cosasetc
//   console.log(process.env);

// una de las variables interesantes que tiene el process  son la variables de entorno
// console.log(process.env.port); //veo que puerto viene del mundo exrterior ...ahora da undefined
                            // pero si lo despliego en un hostin me va a dar ese puerto
// es mas puedo setearle el puerto  3000 con la inst :
//console.log(process.env.port ?? 3000);

// desestrucutracion:
const {SHELL,npm_lifecycle_script} = process.env;

console.log(SHELL);
console.log(npm_lifecycle_script);
console.table({SHELL,npm_lifecycle_script});

export const personaje =['Flash','Superman','Batman']
const [f,s,batman] = personaje
const [_ , superman, __] = personaje
const [flash, ,] = personaje
console.log(batman)
console.log(superman)
console.log(flash)
