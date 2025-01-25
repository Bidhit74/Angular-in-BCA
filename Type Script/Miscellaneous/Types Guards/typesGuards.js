// Type Guards and TypeScript Utilities Types
//  Using typeof and instanceof
// Partial, Required, Readonly
function abcdf(arg) {
    if (typeof arg === "string") {
        console.log(arg.toUpperCase());
    }
    else {
        console.log(arg);
    }
}
abcdf(5);
abcdf("Bidhit");
// abcdf(true);
// instanceof Guard
var TvRemote = /** @class */ (function () {
    function TvRemote() {
    }
    TvRemote.prototype.turnOn = function () {
        console.log("TV is on");
    };
    return TvRemote;
}());
var CarRemote = /** @class */ (function () {
    function CarRemote() {
    }
    CarRemote.prototype.turnOn = function () {
        console.log("Car is on");
    };
    return CarRemote;
}());
var tv = new TvRemote();
var car = new CarRemote();
function handleRemote(remote) {
    if (remote instanceof TvRemote) {
        remote.turnOn();
    }
    else {
        remote.turnOn();
    }
}
handleRemote(tv);
handleRemote(car);
var partialUser = { name: "Bidhit" }; // age is optional
console.log(partialUser);
// Optional field hone ke baad bhi yah Required keyword ke karan jaruri ho jayega
var fullUser1 = { name1: "Bidhit", age1: 22 }; // name and age are required
console.log(fullUser1);
var user3 = { name2: "Alice", age2: 30 };
console.log(user3);
user.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
