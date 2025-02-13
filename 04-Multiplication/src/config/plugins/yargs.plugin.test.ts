

describe('Test yargs.plugin', () => {

    const originalArgv = process.argv;
    //import yargs from 'yargs';  
    const runCommand = async (args:string[])=>{
        process.argv =[ ...process.argv, ...args];
        const {yarg} = await import('./yargs.plugin');
        return yarg;
    }

    beforeEach(()=>{
        process.argv = originalArgv;
        jest.resetModules();
    });


    test('should return default values', async() => {
        const argv = await runCommand(['-b','5']);
       
        //preaparar el ambiente
        expect(argv).toEqual(expect.objectContaining({            
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }));
    });

    test('should return configuration custom values', async() => {
        const argv = await runCommand(['-b','3','-l','20','-s','-n','custom-name','-d','custom-directory']);
        
        //preaparar el ambiente
        expect(argv).toEqual(expect.objectContaining({         
            b: 3,
            l: 20,
            s: true,
            n: 'custom-name',
            d: 'custom-directory'
        }));
    });
});