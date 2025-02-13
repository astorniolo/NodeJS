import { SaveFile } from './save-file.use-case';
import fs from 'fs';


describe('SaveFileUseCase', () => {
    
    
    
    // podriamos borrar el directorio / outpus antes de las pruebas
    // lo podemos hacer interviniendo en el ciclo de vida de las prubas de jest
    // antes de cada prueba
  
    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'outputs',
        fileName: 'customTable'
    };

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;
    
    beforeEach(() => {  
        jest.clearAllMocks(); // limpiar todos los mocks    
    });
    
    //despues de cada prueba
    afterEach(() => {
        // clean up 
        if (fs.existsSync('outputs')) fs.rmdirSync('outputs', {recursive: true}); 

        if (fs.existsSync(customOptions.fileDestination)) fs.rmdirSync(customOptions.fileDestination, {recursive: true});
    }); 
    
    test('should save file with default values first', () => { 
        // Arrange
        const savefile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {                       //como esto esta en el scope tiene mas precedencia  toma estos valiores 
            fileContent: 'test content',        //si no toma los valores de options definicos arriba
            fileDestination: 'outputs',
            fileName: 'table'
        };
        const result = savefile.execute(options);
        // veamos si creo el archico en la carpeta outputs
        const checkFileExist = fs.existsSync(filePath);
        // veamos si el contenido es el correcto
        const fileContent = fs.readFileSync('outputs/table.txt', 'utf-8');

        // Act
        expect(result).toBe(true);
        expect(checkFileExist).toBe(true);
        expect(fileContent).toBe(options.fileContent);
      
    })

    test('should save file with custom values ', () => {
        // Arrange
        const savefile = new SaveFile();
                       
        const result = savefile.execute(customOptions);
        // veamos si creo el archico en la carpeta outputs

        const checkFileExist = fs.existsSync(customFilePath);
        // veamos si el contenido es el correcto
        const fileContent = fs.readFileSync(customFilePath, 'utf-8');

        // Act
        expect(result).toBe(true);
        expect(checkFileExist).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);
    });

    // test('should return false if directory  could not be created', () => {
    //     // Arrange
    //     const savefile = new SaveFile();
    //     const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
    //         () => {  throw new Error('Error custom error from testing'); }
    //     );
                 
    //     // Act
    //     const result = savefile.execute(customOptions);
        
    //     // Assert
    //     expect(result).toBe(false);

    //     //cada vez tenemos mockImplementation tenemos que limpiar el mock  mkdirSync
    //     mkdirSpy.mockRestore();
    // });

    // test('should return false if file   could not be created', () => {
    //     // Arrange
    //     const savefile = new SaveFile();
    //     const writefileSpy = jest.spyOn(fs, 'writefileSync').mockImplementation(
    //         () => { // mock implementation sobre escribo la implementacion lo que quiero`probar
    //         throw new Error('Custom Error writing custom message from testing'); }
    //     );
                 
    //     // Act
    //     const result = savefile.execute( {fileContent:"HOLA", fileDestination: 'outputs', fileName: 'table'});
        
    //     // Assert
    //     expect(result).toBe(false);
        
    //     writefileSpy.mockRestore();
    // });
});