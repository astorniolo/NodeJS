import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template.ts',() => {
    test('email template shoud contain a greeting',() => {
        expect(emailTemplate).toContain('Hi,') 
    });
    test('email template shoud contain a {{name}} and {{orderId}}',() => {
        expect(emailTemplate).toContain('{{name}}') ; //puedo poner tansos expect cpmp sea necesario
        expect(emailTemplate).toContain('{{orderId}}') ;
        
        expect(emailTemplate).toMatch('{{name}}') ; //podemos hacerlo con expresiones regulares
        expect(emailTemplate).toMatch('{{orderId}}') ;
        // si hay mucho codigo hay q separa en tes mas independientes en archivo aparte
    });
});


