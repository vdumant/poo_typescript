export class Animal {
  constructor(public name: string) { }

  move() {
    console.log('Mpving !!!');
  }

  greeting() {
    return 'hello !!' + this.name;
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof');
    }
  }
}

const fifi = new Animal('fifi');
console.log(fifi.greeting());

const tobi = new Dog('tobi','nico');
console.log(tobi.greeting());
console.log(tobi.woof(4));
console.log(tobi.owner);


