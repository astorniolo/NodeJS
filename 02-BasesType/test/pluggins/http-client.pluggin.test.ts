import { httpClientPlugin } from "../../src/pluggins/http-client.pluggin";


describe('pluggins/http-client.pluggin.ts' , () => {

    test('httpClientPlugin should retun a string', async ()=>{
        // si es un cliente http seria interesante y comprobable 
        // que literalmente llegue a nuestro endpoint
        // pero estamos usndo axios ... ahora yo puedo poner un spy mock 
        // voy a testear  resultado de mis funciones y metodos
        //  voy a probar qe si yo llamoel url yo recibo algo
        const  data = await  httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1')
        expect( data ).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)//false  o true no interesa sino que estae la prop y sea boleano
        })
    }); 

    test('httpClientPlugin should have POST, PUT and DELETE methods', async ()=>{
       
        //console.log(typeof httpClientPlugin.post )
        expect( typeof httpClientPlugin.post ).toBe('function');
        expect( typeof httpClientPlugin.put ).toBe('function'); 
        expect( typeof httpClientPlugin.delete ).toBe('function');
        expect( typeof httpClientPlugin.get ).toBe('function');
    }); 
});