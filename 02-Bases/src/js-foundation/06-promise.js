
//promise // seguro voy a nec una peticion http para traer data 

const {http} = require('../pluggins')

const getPokemonById = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    //const response = await fetch(url) ; // await es un codigo bloqueante hasta que no resuelve no continua
    const pokemon = await http.get(url)
    return pokemon.name   
};

module.exports = getPokemonById;