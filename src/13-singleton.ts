export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string) { }

  getnName() {
    return this.name
  }

  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const mysrv1 = MyService.create('serv 1');
console.log(mysrv1.getnName());
const mysrv2 = MyService.create('serv 2');
console.log(mysrv2.getnName());
