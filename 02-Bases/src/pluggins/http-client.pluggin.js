//es es mi wrapper mi patron adaptador  que envuelve el fetchAPI
// si el dia de mañana me piden que las peticiones tengan algun token de autenticacion 
// lo hago aqui y listo

const httpClientPlugin={
    get : async(url) => {
        //wrapper
        const response = await fetch(url) ; // await es un codigo bloqueante hasta que no resuelve no continua
        return await response.json();
    },
    post:async(url,body)=>{},
    put:async(url,body)=>{},
    delete:async(url,body)=>{},
};

module.exports= {
    http : httpClientPlugin,
}