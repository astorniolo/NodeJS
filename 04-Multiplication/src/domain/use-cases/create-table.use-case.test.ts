

import { CreateTable } from './create-table.use-case';


describe('CreateTableUseCase', () => {
    test('should create a multiplication table with default values', () => {
        const createTable = new CreateTable();
        // tengo que llamarla con el valor por defecto
        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n').length;
        // primero evaluar la instancia de nuestra clase
        expect(createTable).toBeInstanceOf(CreateTable);
        console.log(table);
        // luego evaluar el resultado
        //expect(table).toContain('2 x 1 = 2');
        //expect(table).toContain('2 x 10 = 20');
        //expect(table).toBe('2 * 1 = 2 \n2 * 2 = 4 \n2 * 3 = 6 \n2 * 4 = 8 \n2 * 5 = 10 \n2 * 6 = 12 \n2 * 7 = 14 \n2 * 8 = 16 \n2 * 9 = 18 \n2 * 10 = 20 \n');
        expect(rows).toBe(10);
}); 
    test('should create a multiplication table with custom values', () => {

        const options = {
            base: 3,
            limit: 5
        };
        
        const createTable = new CreateTable();

        const table = createTable.execute(options); 
        const rows = table.split('\n').length;
        
        expect(createTable).toBeInstanceOf(CreateTable);
        //expect(table).toBe('3 * 1 = 3 \n3 * 2 = 6 \n3 * 3 = 9 \n3 * 4 = 12 \n3 * 5 = 15 \n');
       // expect( table ).toContain('3 x 1 = 3');
        //expect( table ).toContain('3 x 10 = 30');
        //expect( table ).toContain('3 x 20 = 60');
        //expect(rows).toBe(options.limit);
}); 
});