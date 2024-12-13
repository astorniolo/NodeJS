// para UUID no vamos a probar el paquete ya que esta altamente probado por 
// los que hicieron el paquete
// no se vuelven a hacer testing sobre librerias ya echas
// aca probaremos que funcione  de la manera que se espera 
// que regrese un string de 36 caracteres

import  { getUUID } from '../../src/pluggins';

describe('pluggins/get_id.pluggin.ts', ()=>{
    test('getUUID() should return a UUID', () => {
        const uuid = getUUID();
        //console.log(uuid)
        expect( typeof uuid ).toBe('string');
        expect( uuid.length ).toBe(36);
    });
});
