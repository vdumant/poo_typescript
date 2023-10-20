export abstract class Animal {
  constructor(protected name: string) { }

  move() {
    console.log('Mpving !!!');
  }

  greeting() {
    return 'hello !!' + this.name;
  }

  protected doSomething() {
    console.log('do !');
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
      console.log('woof ' + this.name);
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}

const tobi = new Dog('tobi', 'nico');
console.log(tobi.greeting());
console.log(tobi.woof(4));
tobi.move();


