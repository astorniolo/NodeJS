
//promise // seguro voy a nec una peticion http para traer data 

import {httpClient} from '../pluggins'

export const getPokemonById = async(id: string|number) :Promise<string> => {
    try {
    
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        //const response = await fetch(url) ; // await es un codigo bloqueante hasta que no resuelve no continua
        const pokemon = await httpClient.get(url)
        return pokemon.name   
    
    } catch (error) {
        throw ` Pokemon not found with id ${id} `;
    }
};

