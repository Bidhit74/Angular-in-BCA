# Interfaces:

-   An interface in TypeScript defines the structure or shape of an object. It is used for type-checking and ensures objects adhere to a specific structure.

# Features:

-   -   Optional Properties: Use ? for non-mandatory fields.
-   -   -   Example: name?: string;
-   -   Create Interface using interface keyword.
-   -   Readonly Properties: Use readonly to make fields immutable.
-   -   -   Example: readonly id: number;
-   -   Methods: Define functions within the interface.
-   -   -   Example: greet(): string;
-   -   Extending Interfaces: Combine interfaces using extends.

# Use Cases:

-   Object structure definition.
-   Enforcing type safety.
-   Extending or merging structures.

# Type Aliases:

-   Used to create a custom name for a type (primitive, union, object, or function type).
-   Use Case: Simplify complex types or make code more readable.
-   -   type arg = string | number; // Alias for a union type

# Intersection Types:

-   Combines multiple types into one, requiring all properties to exist.
-   Use Case: For objects or types that share properties from multiple sources.
-   Intersection: & And Union: |
