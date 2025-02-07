

import { CreateTable } from './create-table.use-case';


describe('CreateTableUseCase', () => {
    test('should create a multiplication table with default values', () => {
        const createTable = new CreateTable();
        // tengo que llamarla con el valor por defecto
        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n');
        // primero evaluar la instancia de nuestra clase
        expect(createTable).tobeInstanceOf(CreateTable);
        console.log(table);
        // luego evaluar el resultado
        expect(table).toBe('2 * 1 = 2 \n2 * 2 = 4 \n2 * 3 = 6 \n2 * 4 = 8 \n2 * 5 = 10 \n2 * 6 = 12 \n2 * 7 = 14 \n2 * 8 = 16 \n2 * 9 = 18 \n2 * 10 = 20 \n');
        espect(rows).toHaveLength(10);
}); 
    test('should create a multiplication table with custom values', () => {
}); 
});