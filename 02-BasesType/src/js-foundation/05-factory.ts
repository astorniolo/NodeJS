// factory functions  ()aplicando patrones de diseño aun en JS debilmente 
// para asegurarnos una arquitectura facilmente adaptable a cambios facil de expandir y escalar etc
// una Factoory Fn es una funcion que crea una FUNCION
// const buildPerson =()=>{   // fn que retorna una funcion que crea el obj
//     return ()=>{      
//         return{}
//     }
// }

// const { getUUID } = require('../pluggins/get_id.pluggin');
// const { getUUID } = require('../pluggins/get_id.pluggin');
const { getAge, getUUID } = require('../pluggins')   //tenemos el archivo barril index

const buildPerson =({name,birthdate})=>{   // fn que retorna una funcion que crea el obj

    return {
        id : getUUID(), // id :uidv4() dependencia altamente acoplada !!!! 
                    // en paquetes de 3ª usar patron ADAPTADOR
        name:name,
        birthdate:birthdate,
        age: getAge(birthdate),  //dependencia altamente acoplada
        // ojo porpenso a errores, tendriamos que 
        //evaluar que esto es una fecha , q sea serializable, sino da NaN not a number
    }
};


//lineas de codigo usadas poaraprobar
// const obj={name: 'John', birthdate: '1967-09-08'};
// const john=buildPerson(obj);
// console.log(john);

// paquetes de terceros
//uuid   pero aqui esa dependencia vale la pena
//getage   --lo podemos usar pero lo mejpor es mantener
//las dependenciaas al minimo por tanto es mejor hacer la fn en JS 
//---------------------------------
// ahora si vemos como se usan factory fn
module.exports = {
    buildPerson,
}

