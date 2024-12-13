//event loop
// primero sepamos que js es blocking & single-threaded 
// fue problema que node tuvo que resolver
//hay 3 componentes ppales de NODE: js library  /  c c++ feactures  /  dependencias externas: v98 libv zlib crypto etc
// libuv es el que permite trabajar js con tareas asyncronas  con muchaas peticines web
// event loop decide orden de ejecucion segun sigtes reglas:
// 1  callbacks en el microtask se ejecutan primero ( es decit todo el trabaja syncrono)
// 2  todos los callbacks  dentro del timer queue se ejecutan ( es deci despues de los callbacks y
//  codigo syncrono se ejecutan los que son  setTimeouts   intervalos de tiempo  xej se ejecutan despues)
// 3  calbacks en el   microtask queue (si hay se ejecutan despues de los callback timers,ed
//       1ª tareas en el "nextTick queue" y luego tareas en el"promise queue" )
// 4 callbacks de I/O se ejecutan
// 5 callbacks en el microtask queue se ejecutan si hay  y luego promise si hay
//    siempre callbacks y lyego promesas
// 6 todos los callbacks en el checkqueue se ejecutan
// 7 callbacks en el microtasks queue se ejecutandespues de cada callback ebn el checkqueu
//    ( siguiendo el mismo orden anterior nextTick yluego promise  )
//    los promise callbackx estan en la promise queue
// 8 todos los callbacks en el  close queue son ejecutados
// 9 pro ultima vez en el mismo ciclo , los microtask queues son ejecutados en la misma forma, nexttick y luego promise queue



console.log('Inicio de programa');//1

setTimeout( () => {                 //5 con fn callback  no se va a ejecutar  set time recibe un callback
    console.log('Primer Timeout'); 
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout');  //2
}, 0 );


setTimeout( () => {
    console.log('Tercer Timeout'); //3
}, 0 );


console.log('Fin de programa');  //4
