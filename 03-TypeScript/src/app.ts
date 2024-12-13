import { findHeroById } from "./services/hero.service";



const hero= findHeroById(2);

console.log(hero?.name ?? 'hero not found !!');