const fs =require('fs');  //esto importa filesystem

const content = fs.readFileSync('readme.md','utf8');   //sync es bq
//console.log(data)

console.log('Contar Palabras')

const wordCount=content.split(' ').length;   //arreglo de strings  palabra por palabray nos da cuantas para

console.log('Palabras',wordCount)

const words=content.split(' '); 
const reactwordCount = words.filter(word=>word.toLowerCase()==='react').length   //solucion con filter
// DA 12 PORQUE CORTAMOS PALABRAS POR ESPACIO LUEGO TENEMOS PREGUNTAR POR CONTAINS O INCLUDE
const reactwordCount1 = words.filter(word=>word.toLowerCase().includes('react')).length; 
//ahora da 51 pero podemos mejorar

// con expresiones regulars desde todo el contenido
const reactwordCount2 = content.match(/react/gi).length  //gi es case insensitive

// para asegurarnos qu esio no encuentra ninguna regrese 0 o sea arreglo vacio [] modificamos :
const reactwordCount3 = content.match(/react/gi ?? []).length    

console.log('Palabras React',reactwordCount, reactwordCount1, reactwordCount2, reactwordCount3)  //case insensitive