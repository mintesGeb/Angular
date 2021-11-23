let mixed: (string | number)[] = ["1", 2];
// mixed.push("true");

console.log(mixed);

enum Mintes {
  name,
  age,
  height,
}

console.log(Mintes.name);

let code: any = 123;
let courseCode = <number>code;
let age = code as number;

function Sum(x: number, y: number): number {
  return x + y;
}

function Greet(greeting: string, name?: string): string {
  return greeting + ", " + name + "!";
}
function Greet2(greeting: string, name: string = "my dear"): string {
  return greeting + ", " + name + "!";
}

interface IEmployee {
  id: number;
  name: string;
  getSalary: (id: number) => number;
  getManagerName(id: number): string;
}
interface IKeyPair {
  readonly key: number;
  value?: string;
}

let kv1: IKeyPair = { key: 1, value: "s" };
let kv2: IKeyPair = { key: 2 };
// kv1.key=3
interface ICourse {
  code: number;
  name: string;
  getGrade: (code: number) => number;
}

class Course implements ICourse {
  code: number;
  name: string;
  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
  }
  getGrade(code: number): number {
    return 90;
  }
}

let newCourse = new Course(569, "Web app");

console.log(newCourse.getGrade(569));

// with Access modifiers
class Course2 implements ICourse {
  constructor(public code: number, public name: string) {}
  getGrade(code: number): number {
    return 90;
  }
}

function last_generics<T>(arr: Array<T>): T {
  return arr[arr.length - 1];
}

const last = last_generics<number>([1, 2, 3]);
const last2 = last_generics<string>(["A", "s"]);

function display<T, U>(id: T, name: U): void {
  console.log(typeof id + ", " + typeof name);
}

display<number, string>(12, "mintes");

class Person {
  constructor(public firstname: string, public lastname: string) {}
}

function display2<T extends Person>(person: T): void {
  console.log(`${person.firstname} ${person.lastname}`);
}

let mintes = new Person("mintesinot", "gebre");
display2(mintes);

interface NewKeyPair<T, U> {
  key: T;
  value: U;
}

let kv3: NewKeyPair<number, string> = { key: 1, value: "geb" };
let kv4: NewKeyPair<number, number> = { key: 1, value: 200 };

const course3 = { name: "cs569" };

function addLevel(obj) {
  return {
    level: 500,
    name: obj.name,
  };
}

console.log(addLevel(course3));

@addLevel2(500)
class Course3 {
  name = "CS569";
}

function addLevel2(val) {
  return function (targetedClass) {
    return class {
      level = val;
      name = new targetedClass().name;
    };
  };
}

console.log(new Course3());
