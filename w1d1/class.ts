const grade: number = 90;
const myName: string = "mintes";

let employee: {
  id: number;
  name: string;
};

employee = {
  id: 23,
  name: "34",
};

const values: number[] = [12, 23, 45];
let fruits: Array<string> = ["banana", "orange", "mango"];

let mixed: (string | number)[] = ["1", 2];

console.log(mixed);

interface Employee {
  name: string;
}
let myEmployee = <Employee>{};

myEmployee = {
  name: "st",
};

function last_gen<T>(arr: Array<T>): T {
  return arr[arr.length - 1];
}

let myNum = last_gen<number>([1, 2, 3]);
let mytext = last_gen<string>(["1", "2", "3", "s"]);
console.log(myNum, mytext);

function display3<T, U>(id: T, name: U): void {
  console.log(typeof id + ", " + typeof name);
}

display3<number, string>(1, "gashe");

class Person2 {
  constructor(public firstname: string, public lastname: string) {}
}

function myPeople<T extends Person2>(myPerson: T) {
  console.log(myPerson.firstname, myPerson.lastname);
}

myPeople({ firstname: "1", lastname: "tolosa" });

interface IKeyPair2<T, U> {
  key: T;
  value: U;
}

let kp1: IKeyPair2<number, string> = {
  key: 1,
  value: "mintes",
};
let kp2: IKeyPair2<string, string> = {
  key: "s",
  value: "sdf",
};

class KeyValuepair2<T, U> {
  private key: T;
  private val: U;
  setKeyValue(key: T, val: U): void {
    this.key = key;
    this.val = val;
  }
  display(): void {
    console.log(this.key, this.val);
  }
}

let myPair1 = new KeyValuepair2<number, string>();
myPair1.setKeyValue(1, "s");
myPair1.display();

let myPair2 = new KeyValuepair2<string, string>();
myPair2.setKeyValue("s1", "sol");
myPair2.display();
