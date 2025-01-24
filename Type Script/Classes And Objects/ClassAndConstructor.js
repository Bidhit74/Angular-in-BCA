// Class Definition
// Defines a class with default properties that represent a device.
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg"; // Default value for the device name
        this.price = 20000;
        this.category = "digital";
    }
    return Device;
}());
var d1 = new Device(); // Creates an instance of the Device class
var d2 = new Device();
// Constructor
// Allows initializing properties at the time of object creation.
var BottleMeker = /** @class */ (function () {
    function BottleMeker(brand, // Brand of the bottle
    price, // Price of the bottle
    color, // Color of the bottle
    material // Material type of the bottle
    ) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
    return BottleMeker;
}());
var b1 = new BottleMeker("Milton", 1500, "Blue", "Metal"); // Bottle instance
var b2 = new BottleMeker("Cello", 150, "Transparent", "plastic"); // Bottle instance
// Class with Logic in the Constructor
// Represents a music entity with additional logic for default values.
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        this.name = name; // Initialize name
        this.artist = artist; // Initialize artist
        this.thumbnail = thumbnail; // Initialize thumbnail
        this.length = length; // Initialize length
        this.free = free; // Initialize free status
        // Set default thumbnail if none is provided
        if (!thumbnail) {
            this.thumbnail = "something.jpg";
        }
    }
    return Music;
}());
var m1 = new Music("Jai Shree Ram", "Bidhit Chaudhary", "Ramji.jpg", 1500, false); // First music instance with all details
var m2 = new Music("Har Har Mahadev", "Bidhit", "", 1000, true); // Second music instance with default thumbnail
