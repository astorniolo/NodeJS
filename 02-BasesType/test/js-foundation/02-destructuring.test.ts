import { personaje } from "../../src/js-foundation/02-destructuring";

describe('js-foundation/02-destructuring.ts',() => {
    test('personaje should contain Flash, Superman',() => {
        console.log(personaje)
        expect(personaje).toContain('Flash');
        expect(personaje).toContain('Superman'); 
    });
    test('first personaje should be Flash & second Superman',() => {
        const [flash, superman]= personaje //desestructuro
        
        expect(flash).toBe('Flash'); //primero
        expect(superman).toBe('Superman'); //segundo
    });

});