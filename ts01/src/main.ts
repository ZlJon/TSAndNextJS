let age = 19;

let ageWithType: number = 22;

ageWithType = +20;

let testBool: boolean | number;

testBool = 10;
testBool = false;
// testBool = [];

let names = ["john", "kim", "tom"];

names.push("mike");

let numbers = [1, 2, 4, 7];

numbers.push(10);

let testStringArray: string[];

testStringArray = ["one", "two", "three", "four"];

// testStringArray = [true, 12, 343, "test"]

let testStringOrNumberArray: (string | number)[];

testStringOrNumberArray = [1, 2, "test"];

// OBJECTS

let user = {
  userName: "kim",
  age: 22,
  isAdmin: false,
};

user.userName = "jane";
// user.age = "eighteen";
user.age = 10;
// user.isAdmin = "true";
user.isAdmin = true;

let userObj: {
  userName: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

userObj = {
  userName: "kim",
  age: 23,
  isAdmin: true,
  // phone: "1231223",
};

// ANY

let testAny;

testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, "two", false, [], {}];

// functions

let sayHi = () => {
  console.log("first");
};

// sayHi = "hi"

let funReturnString = (): string => {
  console.log("hi");
  return "kim";
};

let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

let multiple3 = (num: number): void => {
  // return num * 2;
  // 어떤 걸 실행하지만, 반환하지 않는다.
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};

sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

// Type aliases

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "kim",
  age: 70,
  // theme: "blue",
  theme: "light",
};

// Interfaces

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  email: "test@test.com",
  age: 20,
  employeeId: 100,
};

// type 유형과 interfaces와 착각하지 말기, 서로 기능은 비슷하나, 인터페이스는 extends를 통해 새로운 오브젝트를 확장(상속 개념)할 수 있음.

// Generics (제네릭)

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[]; //배열 안에 어떤 타입의 값을 다 넣을 수 있음.
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: ["str", "str2"],
};

interface IPostEvenBetter<T extends object> {
  id: 1;
  title: "post title";
  desc: "post desc";
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [
    { id: 1, username: "kim" },
    { id: 12, username: "kim2" },
  ],
};

const testMe3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [
    { id: 1, username: "kim" },
    { id: 12, username: "kim2" },
  ],
};

const testMe4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post desc",
  extra: [{ id: 1, title: "cat" }],
};
