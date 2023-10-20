import { Animal,Dog } from "./09-protected";

const animal = new Animal('elite');
animal.greeting();

const tobi = new Dog('tobi', 'nico');
console.log(tobi.woof(4));
tobi.move();
