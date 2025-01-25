// Type Guards and TypeScript Utilities Types
//  Using typeof and instanceof
// Partial, Required, Readonly

function abcdf(arg: number | string) {
    if (typeof arg === "string") {
        console.log(arg.toUpperCase());
    } else {
        console.log(arg);
    }
}

abcdf(5);
abcdf("Bidhit");
// abcdf(true);

// instanceof Guard
class TvRemote {
    turnOn() {
        console.log("TV is on");
    }
}
class CarRemote {
    turnOn() {
        console.log("Car is on");
    }
}

let tv = new TvRemote();
let car = new CarRemote();
function handleRemote(remote: TvRemote | CarRemote) {
    if (remote instanceof TvRemote) {
        remote.turnOn();
    } else {
        remote.turnOn();
    }
}
handleRemote(tv);
handleRemote(car);

// 1. Partial<T> Makes all properties of type T optional.
// Syntax:
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

interface User {
    name: string;
    age: number;
}
const partialUser: Partial<User> = { name: "Bidhit" }; // age is optional
console.log(partialUser);

// Required<T> Makes all properties of type T required.

// Syntax:
// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

interface User2 {
    name1?: string; // Optional
    age1?: number; // Optional
}
// Optional field hone ke baad bhi yah Required keyword ke karan jaruri ho jayega
const fullUser1: Required<User2> = { name1: "Bidhit", age1: 22 }; // name and age are required
console.log(fullUser1);

// 3. Readonly<T> Makes all properties of type T read-only (immutable).
// Syntax:
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

interface User3 {
    name2: string;
    age2: number;
}

const user3: Readonly<User3> = { name2: "Alice", age2: 30 };
console.log(user3);
user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
