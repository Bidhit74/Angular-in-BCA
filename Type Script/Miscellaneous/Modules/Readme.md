# Modules in TypeScript

-   Modules are self-contained blocks of code that can be reused, exported, and imported into other files. They help in organizing code into manageable pieces and promote code reusability and maintainability.

# Key Concepts of Modules:

1. Exporting: To make variables, functions, classes, or interfaces available outside a file, use the export keyword.

2. Importing: To use exported members from another file, use the import keyword.
   Default and Named Exports:

3. Default Export: Only one default export is allowed per file.

4. Named Export: Multiple exports are allowed per file.

5. Module Resolution: TypeScript uses the file structure or tsconfig.json settings to resolve module paths.

# Advantages of Modules:

-   Code Organization: Breaks large codebases into smaller, manageable files.
-   Reusability: Promotes sharing of code across multiple files.
-   Encapsulation: Keeps the code private unless explicitly exported.
-   Maintainability: Easy to update and debug.
