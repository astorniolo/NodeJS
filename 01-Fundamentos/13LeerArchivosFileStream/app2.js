 const fs =require('fs');

 const data=fs.readFileSync('readme.md','utf8');   //sync es bq
 //console.log(data)

//  hagamos algo con esto
const newData = data.replace(/React/ig,'Angular')  //cambio react por angular

//crear nuevo archivo
fs.writeFileSync('readme-angular.md', newData)   //tenemos el archivo modificado con el reemplazo


//console.log(newDatadata)
