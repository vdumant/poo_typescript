console.log(Math.PI);

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item, 0);
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1, 2, 3));
