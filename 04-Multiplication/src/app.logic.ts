import fs from 'fs';
import { yarg } from "./config/plugins/yargs.plugin";

let outputMessage: string= "";
const { b:base, l:limit, s:showTable } = yarg;

const headerMesssage =`
==================================
           TABLA del ${base}   
===================================\n
`;

const outputPath= "outputs";

for(let i=1; i<=limit; i++){
    outputMessage += `${base} * ${i} = ${base*i} \n`;
}

outputMessage= headerMesssage + outputMessage;

if (showTable) console.log(outputMessage);
   
fs.mkdirSync(outputPath,{recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,outputMessage);
console.log("File created");