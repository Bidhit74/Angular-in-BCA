// Getters and Setters
// With using get and set keyword
var UserBidhit = /** @class */ (function () {
    function UserBidhit(name, age) {
        this.name = name;
        this.age = age;
    }
    UserBidhit.prototype.getName = function () {
        return this.name;
    };
    UserBidhit.prototype.setName = function (value) {
        this.name = value;
    };
    return UserBidhit;
}());
var u1 = new UserBidhit("Bidhit", 22);
u1.getName();
console.log(u1.getName());
u1.setName("Binit Kumar");
console.log(u1.getName());
// With using keyword get and set
var Person1 = /** @class */ (function () {
    function Person1() {
        this._age = 0; // Private property
    }
    Object.defineProperty(Person1.prototype, "age", {
        // Getter
        get: function () {
            return this._age;
        },
        // Setter
        set: function (value) {
            if (value > 0) {
                this._age = value;
            }
            else {
                console.error("Age must be a positive number!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var person = new Person1();
person.age = 25; // Calls the setter
console.log(person.age); // Calls the getter, Output: 25
person.age = -5; // Error: Age must be a positive number!
