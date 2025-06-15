# Basic Types

The goal of this homework is to reinforce your skills working with TypeScript's basic types. You will work with types such as number, string, boolean, null, undefined, unknown, any, as well as tuples, enums, and union types.

At the end of the homework, you will also practice creating your own type based on existing objects. This will help you better understand how TypeScript can be used to ensure type safety for your data and improve the quality of your code.

### Task 1
Here is the following JavaScript code:

```ts
let age = 50;
let name = 'Max';
let toggle = true;
let empty = null;
let notInitialize;
let callback = (a) => { return 100 + a };
```

Convert this code to TypeScript by specifying the appropriate types for all variables.

### Task 2
A JavaScript variable can store a value of any type:
```ts
let anything = -20;
anything = 'Text';
anything = {};
```
What type would you assign to the variable `anything` in TypeScript to keep its flexibility?

### Task 3
In TypeScript, the `unknown` type allows us to store any value, but we cannot assign an `unknown` variable directly to another variable unless we are sure of its type. You have the following code:
```ts
let some: unknown;
some = 'Text';
let str: string;
str = some;
```
What needs to be fixed in this code to make it correct and safe?

### Task 4
You have the following JavaScript array:
```ts
let person = ['Max', 21];
```
How would you rewrite it in TypeScript using the concept of tuples to ensure that the first element is always a string and the second is a number?

### Task 5
How do you define a variable in TypeScript that can accept either a string or a number (union type)? Also, define a variable that can only accept one of two string values: 'enable' or 'disable' (literal type).

### Task 6
You have the following JavaScript functions:
```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error('Error');
}
```
How would you specify the types for the arguments and return values of these functions?

### Task 7
Create a function (`isWeekend`) that takes a day of the week (from your enum) and returns a boolean value indicating whether it is a working day or a weekend.

### Task 8
Create a type "Gender" using a union type, which can have the values "male" or "female". Create a variable `myGender` of this type.

### Task 9
You have two objects:
```ts
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}
```
Create a new data type that is suitable for these two objects.

# Generic

The goal of this assignment is to help you understand and apply generics in TypeScript. You will work with functions that return promises, use the built-in Pick type, merge objects using generics, and solve type issues in classes.

### Task 1
There is a function `getPromise()` that returns a promise, which resolves to an array containing strings and numbers. Complete this function using generics so that it returns the correct type.
```ts
function getPromise () {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
.then((data) => {
  console.log(data);
});
```
### Task 2
You have a type `AllType`. There is a function `compare` that takes two objects. These objects contain fields from `AllType`. Your task is to use Pick and generics to specify that the fields of these objects belong to `AllType`. The function `compare` should return `AllType`.
```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare (top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
```
### Task 3
You have a function `merge` that combines two objects. Use generics to specify that these objects can be of any type.
```ts
function merge (objA, objB) {
  return Object.assign(objA, objB);
}
```
### Task 4
Use generics and interfaces to fix the error in the following classes:
```ts
class Component {
  constructor (public props:T) {

  }
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}
```
### Task 5
You need to implement the `KeyValuePair` interface, which describes a key-value pair. Use generics so that this interface can work with any types of keys and values.
```ts
interface KeyValuePair {
  key;
  value;
}
```
### Task 6
You have a user registration form. Sometimes you need to pre-fill the form with user data to update their profile. However, you do not always need to fill in all fields. For example, a user may want to update only their email and password, leaving their first and last name unchanged.

Fix the type in the function argument so that there are no type errors.
```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: User) {
  // Update user
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
```
### Task 7
You have the `UserRole` enum, which is used to classify users in your application. You want to create a `RoleDescription` object that maps each user role to its description.
```ts
export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Replace the following code with a version using Record
const RoleDescription = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
```
### Task 8
You have a type `Form` that contains information about a form, including the `errors` field. You want to create a new type `Params` that includes all fields from `Form` except for `errors`.
```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params so that the 'errors' field is excluded from the Form type
type Params = Form;
``