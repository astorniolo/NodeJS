
import yargs  from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs( hideBin(process.argv) )
    .option('b',{                                  //ahora descriptor de cada argumento
        alias:'base',
        type:'number',
        demandOption:true,
        describe: 'Multiplication table base'
    })
    .option('l',{
        alias:'limit',
        type:'number',
        default:10,
        describe: 'Multiplication table limit' 
    })
    .option('s',{
        alias:'show',
        type:'boolean',
        default:false,
        describe: 'Show Multiplication table' 
    })
    .option('n',{
        alias:'name',
        type:'string',
        default:'multiplication-table',
        describe: 'File Name' 
    })
    .option('d',{
        alias:'destination',
        type:'string',
        default:'outputs',
        describe: 'File Destination' 
    })
    
    // se pueden especificar validaciones
    .check((argv,options)=>{
        //console.log({argv,options});
        if (argv.b < 1) throw 'Error: base must be greater than 0;'
        
        return true
    })
    .parseSync();
