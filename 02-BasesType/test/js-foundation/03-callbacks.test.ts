import { getUserById } from "../../src/js-foundation/03-callbacks";


describe('js-foundation/03-callbacks.ts',() => {
    test('getUuserbyId should return an error if user does not exists',() => {
        const id = 10;
        getUserById( id, ( err, user)=>{
            expect( err ).toBe(`USER not found with id ${id}`); 
            expect( user ).toBeUndefined();
        });
    });
    test('getUuserbyId should return john DOE',(done) => {
        const id = 1;
        getUserById( id, ( err, user)=>{

            expect( err ).toBeUndefined; 
            expect( user ).toEqual({
                id: 1,
                name: 'John Doe',
            })
            done(); // no lo termines hasta que no se haga el done para codigo no bloqueante
        });
    });

});