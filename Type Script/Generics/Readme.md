# Generics in TypeScript

-   Generics allow you to create reusable, type-safe components or functions that work with multiple types without losing type information. They provide a way to define the type at the time of usage rather than during the definition.

# Why Use Generics?

1. Type Safety: Ensures the correct type is used.
2. Reusability: Can work with different data types without rewriting the code.
3. Flexibility: Adapts to the type provided during usage.

# Key Points:

1. <T>: Placeholder for a type (can be replaced with any name, e.g., <U> or <Type>).
2. Constraints: Use extends to restrict the type (e.g., T extends number).
3. Common Usage: Arrays, functions, classes, and interfaces.

# Generic Functions in TypeScript

-   Generic Functions are functions that can work with multiple types while maintaining type safety. They use type variables (like <T>) to define the type when the function is called, making the function reusable for different data types.

-   Generic Functions make TypeScript functions flexible, type-safe, and reusable for any type of input.

# Generic Classes in TypeScript

-   Generic Classes are classes that can operate on multiple types using type parameters, making them reusable and type-safe. They use a placeholder (like <T>) to define the type, which is determined when an instance of the class is created.

-   Generic classes make your code more flexible, type-safe, and reusable, especially when dealing with collections or data storage systems.

# Generic Interfaces in TypeScript

-   Generic Interfaces are interfaces that can work with multiple types by using type parameters. This makes them flexible and reusable for various data types while ensuring type safety.

-   Generic interfaces enhance type safety, reusability, and flexibility when working with data structures, methods, or collections.
