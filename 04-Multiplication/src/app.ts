import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

//console.log(process.argv)
console.log(yarg)
console.log(yarg.b);

//fn anonima auto-invocada asincrona   
// la encierro entre parentesis y la invoco 
// la hago asyncron con la palabra async
( async() => {
    await main();
})();

async function main(){
    console.log(yarg)
    const { b:base, l:limit, s:showTable, n:fileName, d:fileDestination } = yarg;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}