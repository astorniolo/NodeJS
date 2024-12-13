// probando una promise
//varias formas de hacer pruebas:
//      una hacer pruebas con httpclient 
//         *  podriamos mandarle algun mock o implementacion ficticia de httpclient para simular un msj de exito
//          * o bien podemos probar  literalmente la funcion asi como viene y esperar el
//            resultado real que seria producto de la llamada a pokeapi.co
//         * otras ocaciones tb necesitaremos crear una BD FICTICIA
//  cuanto mas desacoplado sea nuestro codigo es nmas facil de probar ---- mas faciel  piezas pequeñas 

import { getPokemonById } from "../../src/js-foundation/06-promise";



describe('js-foundation/06-promise.ts',()=>{
    // aca usamos asyncronia y el done()    
    test('getPokemonById shuld return a pokemon',async()=>{
        const pokemonId=1;
        const pokemomName = await getPokemonById(pokemonId);
        expect(pokemomName).toBe('bulbasaur')
    });
    // primero endpoint regresa exito 
    test('getPokemonById return an error if pokemon does not exist', async()=>{
        const pokemonId=1000000000000;  
        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy();  // no pasa nunca e ejecuta
        } catch (error) {
            //console.log(error)    " Pokemon not found with id 1000000000000 "
            expect(error).toBe(' Pokemon not found with id 1000000000000 ')
            //estamos atrapando una exepcion
        }
    });
})