// Defining Interfaces
// Using interfaces to define objects shapes
// Extending interfaces
function getDataUser(obj) {
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.age);
}
function getDataAdmin(obj1) {
    console.log(obj1.name);
    console.log(obj1.email);
    console.log(obj1.age);
    console.log(obj1.gender);
    console.log(obj1.password);
}
getDataUser({ name: "Bidhit", email: "bkch@gmail.com", age: 22 });
// Jub do interface same name hota hai to wah apas me marje ho jata hai
function getAbcd(val) {
    console.log(val.age);
    console.log(val.name);
}
getAbcd({ name: "Bidhit", age: 23 });
