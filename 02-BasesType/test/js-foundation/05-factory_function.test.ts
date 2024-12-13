// en  factory function nec probar que fn como yo quiero
// probar parametros

import { buildMakePerson } from "../../src/js-foundation/05-factory_function";

describe('js-foundation/05-factory_function.ts', () => {

    const getUUID = () => '1234';
    const getAge  = () => 37;
    
    test('buildMakePerson should return a function', () => {
        //    si el codigo es syncrono no hace fala poner el done y el async
        // ahora son pruebas atomica  luego solo me importan los valores por eso creo las constantes
        // no me interesa probar q la edad sea correcta o q el uuid sea correcto
        // luego en pruebas de integracion probaremos las funcions inyectadas getage y get uuid
        const makePerson = buildMakePerson( { getUUID , getAge} );
        //primero pruebo que sea una funcion
        expect( typeof makePerson).toBe('function'); 
        // segundo pruebo es probar la funcion en si
        
    //    
    });

    // segundo pruebo es probar la funcion en si
    test('MakePerson should return a person', () => {
        
        const makePerson = buildMakePerson( { getUUID , getAge} );
        const john = makePerson ({ 
            name: 'John Doe', 
            birthdate: '1967-09-08'
        });
        //tip si no sabe a cienci cierta que retorna hacemos un cosole log del objeto
        //console.log(john) 
        expect(john).toEqual({
             id: '1234',
             name: 'John Doe', 
             birthdate: '1967-09-08', 
             age: 37 
        }); 
        

    });
});



// test('getUuserbyId should return john DOE',(done) => {
//     const id = 1;
//     getUserById( id, ( err, user)=>{

//         expect( err ).toBeUndefined; 
//         expect( user ).toEqual({
//             id: 1,
//             name: 'John Doe',
//         })
//         done(); // no lo termines hasta que no se haga el done para codigo no bloqueante
//     });
// });






// export const buildMakePerson = ({ getUUID ,getAge }:BuildMakePersonOptions) => {
//     return  ({name , birthdate}: PersonOptions )=>{   
//         return {
//             id : getUUID(), 
//             name:name,
//             birthdate:birthdate,
//             age: getAge(birthdate),  
//         }
//     }
// } 
