# Class

-   A blueprint for creating objects with predefined properties and methods.
-   -   Purpose: Encapsulates data and behavior in a reusable structure.

# Constructor

-   A special method used to initialize an object’s properties when a class is instantiated.

-   -   Purpose: Automatically assigns values to class properties.

# Access Modifiers in TypeScript:

1. Public: Accessible from anywhere (default modifier).

2. Private: Accessible only within the class where it's defined.

3. Protected: Accessible within the class and its subclasses.

# Getters and Setters\

-   Getters and Setters are special methods in TypeScript used to access and modify the private properties of a class. They help in encapsulation and provide controlled access.
-   Getters (get)
-   -   Used to retrieve (read) the value of a private property.
-   -   -   Syntax: get propertyName(): type { ... }
-   Setters (set)
-   -   Used to modify (write) the value of a private property with validation or logic.
-   -   -   Syntax: set propertyName(value: type) { ... }

# Static Members

-   Static Members in TypeScript are properties or methods of a class that belong to the class itself, not to any specific instance. They can be accessed directly using the class name without creating an object.
-   -   Declared using the static keyword.

# Abstract Classes and Methods in TypeScript

-   Abstract Classes:
    • Cannot be instantiated directly.
    • Use the abstract keyword before the class and its methods.
    • Serve as a blueprint for derived (child) classes.
    • May contain both implemented methods and abstract methods.
-   Abstract Methods:
    • Must be implemented in derived classes.
    • Cannot have a body in the abstract class.
