// Class Definition
// Constructor

// Class Definition
// Defines a class with default properties that represent a device.
class Device {
    name = "lg"; // Default value for the device name
    price = 20000;
    category = "digital";
}
let d1 = new Device(); // Creates an instance of the Device class
let d2 = new Device();

// Constructor
// Allows initializing properties at the time of object creation.
class BottleMeker {
    constructor(
        public brand: string, // Brand of the bottle
        public price: number, // Price of the bottle
        public color: string, // Color of the bottle
        public material: string // Material type of the bottle
    ) {}
}
let b1 = new BottleMeker("Milton", 1500, "Blue", "Metal"); // Bottle instance
let b2 = new BottleMeker("Cello", 150, "Transparent", "plastic"); // Bottle instance

// Class with Logic in the Constructor
// Represents a music entity with additional logic for default values.
class Music {
    public name; // Music name
    public artist; // Music artist
    public thumbnail; // Thumbnail image
    public length; // Duration of the music in seconds
    public free; // Availability status (free or not)

    constructor(
        name: string,
        artist: string,
        thumbnail: string,
        length: number,
        free: boolean
    ) {
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
}

let m1 = new Music(
    "Jai Shree Ram",
    "Bidhit Chaudhary",
    "Ramji.jpg",
    1500,
    false
); // First music instance with all details

let m2 = new Music("Har Har Mahadev", "Bidhit", "", 1000, true); // Second music instance with default thumbnail
