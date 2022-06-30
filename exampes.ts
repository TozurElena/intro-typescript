const id: symbol = Symbol();

const stolenDonate: bigint = 54000n;

const userInfo: object = {
  lastName: 'Kozyreva',
}

const bazFoo: Array<string> = ['Von', 'Icov', 'Tool'];
const footBar: (number | string)[] = [1, 'world', 3, 4];

const fooBaz: [string, number, ...boolean[]] = ['Ivaniv', 54, true, true, false];

// Interfaces
interface User {
  readonly firstName: string;
  lastName: string;
  age?: number;
}
const user1: User = {
  firstName: 'Elena',
  lastName: 'Kozyreva',
  age: 45,
}
const user2: User = {
  firstName: 'Nila',
  lastName: 'Kozyreva',
};

interface Admin extends User {
  canBan: boolean;
};
const admin1: Admin = {
  firstName:'Pol',
  lastName: 'Rup',
  canBan: true,
};

// Type Aliases
type  StringNumNull = string | number | null;
let fooBar: StringNumNull;
fooBar = 42;
fooBar = "some string";
fooBar = null;

type Person = {
  readonly firstName: string;
  lastName: string;
  age?: number;
}
 
type AdminPerson = Person & {
  canBan: boolean;
}
const adminPerson1: AdminPerson = {
  firstName:'Pol',
  lastName: 'Ruper',
  canBan: true,
};

type IndexType = {
  [key: string]: number;
}
const infoWithIndexType: IndexType = {
  age:54,
}

// implements
interface Connection {
  request(url: string): any;
}
class FetchService implements Connection {
  request(url: string): any {
    return fetch(url).then((result) => result.json())
  }
}
const fetchPost = new FetchService();
fetchPost
  .request('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => {
    console.log('data: ', data);
  });

  