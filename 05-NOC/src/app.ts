import { Server } from "./presentation/server";


// llamamos al server.app desde una fn anonima autoinvocada
(async() => {
    main();
})();


function main() {
    Server.start();
}
// la vntaja de que sa una fn anonima autoinvocada es que 
// si la ocuparan puedo esperarse a que termine el main 
// antes de que pudieran seguir aciendo otros pasos