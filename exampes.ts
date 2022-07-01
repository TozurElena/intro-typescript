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
interface Connection<T> {
  request(url: string): Promise<T>;
}
class FetchService<P> implements Connection<P> {
  request(url: string): Promise<P> {
    return fetch(url).then((result) => result.json())
  }
}
interface Post {
  id: number;
  usedId: number;
  title: string;
  body: string;
}

const fetchPost = new FetchService<Post>();
fetchPost
  .request('https://jsonplaceholder.typicode.com/posts/1')
  .then((data) => {
    console.log('data: ', data);
  });

// Generics
function echo<T>(data: T) {
  return data;
}
const output = echo<string>('Avion');
const myAge: number = 46;
const outputAge = echo(myAge);

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
getLength('KOzyreva');
getLength({length:32});
// getLength(54); //error
getLength([]); //ok, array with proper length

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed?: boolean;
  body?: string;
}
// partial - faire chaque propres optionnels
const todo1:  Partial<Todo> = {
  title: 'Acheter auto',
};
// required - faire toutes propres obligatoires
const todo2: Required<Todo> = {
  id: 1,
  title: 'Acheter block',
  userId: 54,
  completed: true,
  body: '4x4',
};
const todo3: Readonly<Todo> = {
  id: 1,
  title: 'Acheter livre',
  userId: 55,
}

const infoWithRecordUtilityType: Record<string, number> = {
  age: 54,
}
// Pick - peux créeer nouvelle type sur base d'argument, prendre des proprietes, qui sont 2-ème argument
const todo4: Pick<Todo, "id" | "title"> = {
  id:2,
  title: 'Acheter maison',
};

// Omit - peux créer nouvelle type sur base d'argument, sauf des proprietes, qui sont 2-ème argument
const todo5: Omit<Todo, "id"> = {
  title: 'Acheter maison',
  userId: 54,
};
// copier le type de propriété d'une autre interface.
interface NewTodo {
  text: Todo["title"]; //name de propriété de quel on veut copier
}

// Typage de callback
function myOwnForEach<T>(data: T[], callback: (item:T) => void) {
  for(let i = 0; i < data.length; i++) {
    callback(data[i]);
  }
}
myOwnForEach([1, 2, 3, 4], (item) => {
  console.log('item: ', item);

})