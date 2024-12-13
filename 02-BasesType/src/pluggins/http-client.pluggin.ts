//es es mi wrapper mi patron adaptador  que envuelve el fetchAPI
// si el dia de mañana me piden que las peticiones tengan algun token de autenticacion 
// lo hago aqui y listo
import axios  from 'axios';

export const httpClientPlugin = {
    get : async (url: string) => {
        const { data } = await axios.get(url); // await es un codigo bloqueante hasta que no resuelve no continua
        return data;
    },
    post:async(url:string,body:any)=>{
        throw new Error('Method post not Implemented');
    },
    put:async(url:string,body:any)=>{
        throw new Error('Method put not Implemented');
    },
    delete:async(url:string)=>{
        throw new Error('Method post not Implemented');
    },
};

