//implementamos el patron adaptador para get-age
const getAgePlugin = require('get-age')

const getAge = (birthdate)=>{
    return birthdate 
        ? getAgePlugin(birthdate) 
        : new Error('birdthdate is required');
}

module.exports = {
    getAge,
}