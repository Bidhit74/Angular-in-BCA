// Defining Interfaces
// Using interfaces to define objects shapes
// Extending interfaces

// Defining Interfaces
interface User {
    name: string; // mandatory
    email: string; // mandatory
    age: number; // mandatory
    gender?: string; // (?) - optional
}

interface Admin extends User {
    password: string;
    admin: boolean;
}

function getDataUser(obj: User) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.age);
}

function getDataAdmin(obj1: Admin) {
    console.log(obj1.name);
    console.log(obj1.email);
    console.log(obj1.age);
    console.log(obj1.gender);
    console.log(obj1.password);
}

getDataUser({ name: "Bidhit", email: "bkch@gmail.com", age: 22 });

interface abcd {
    name: string;
}
interface abcd {
    age: number;
}

// Jub do interface same name hota hai to wah apas me marje ho jata hai
function getAbcd(val: abcd) {
    console.log(val.age);
    console.log(val.name);
}

getAbcd({ name: "Bidhit", age: 23 });
