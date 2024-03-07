import generateName from "sillyname";
import superheroes from "superheroes";
let randomName = generateName();
let randomSuperHeroName = superheroes.random();
console.log(`Eu sou ${randomName}, porém, de noite atuo como ${randomSuperHeroName}`);