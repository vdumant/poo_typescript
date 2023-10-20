export interface Driver {
  database: string;
  password: string;
  port: string;

  connect(): void;
  disconnect(): void;
  isConnected(name:string):boolean;
}

// const driver: Driver = {
//   database: '',
//   password: '',
//   port: '',
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: string,
    private host: string
  ) { }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }

  connect(): void {

  }
}
class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: string
  ) { }
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }

  connect(): void {

  }
}
