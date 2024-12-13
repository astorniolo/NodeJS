//es es mi wrapper mi patron adaptador  que envuelve el fetchAPI
// si el dia de mañana me piden que las peticiones tengan algun token de autenticacion 
// lo hago aqui y listo
const axios = require('axios');

const httpClientAxiosPlugin={
    get : async(url) => {
        //wrapper
        const {data} = await axios.get(url) ; // await es un codigo bloqueante hasta que no resuelve no continua
        
        return data;
    },
    post:async(url,body)=>{},
    put:async(url,body)=>{},
    delete:async(url,body)=>{},
};

module.exports= {
    http : httpClientAxiosPlugin,
}