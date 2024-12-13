
import {getAge} from "../../src/pluggins";

describe('pluggins/get-age.plugin.ts',()=>{
    test('ge<ageshould return the age of a person',()=>{
        const birthdate ='1967-9-8';
        const age= getAge(birthdate);
        expect(typeof age).toBe('number')
        expect(age).toBe(57);
    });
    test('getAge should return curent age',()=>{
        const birthdate ='1967-9-8';
        const age= getAge(birthdate);

        // para que la edad sea calculada siempre que se ejecute el test..al dia de mañana
        // por tanto traigo el calculo aqui usando exactamente lo que se usa para 
        // el calculo en esa funcion 
        const calculeteAge=new Date().getFullYear() - new Date(birthdate).getFullYear();
        expect(age).toBe(calculeteAge);

    })
    //SPY ON
    // obs que tenemos dependencias como getfullyear por tanto podemos simularlo
    test('getAge should return 0 years',()=>{
        const spy= jest.spyOn(Date.prototype, 'getFullYear' ).mockReturnValue(1995);
        const birthdate ='1995-9-8';
        const age= getAge(birthdate);
      
        expect (age).toBe(0) 
        //console.log(spy)
        expect(spy).toHaveBeenCalled();
        //expect(spy).toHaveBeenCalledWith({ a: 1});
        //pruebas robustas y flexibles al paso del tiempo
    })
});