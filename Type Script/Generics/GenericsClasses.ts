// Generics Classes
class Box<T> {
    private content: T;
    constructor(content: T) {
        this.content = content;
    }
    getContent(): T {
        return this.content;
    }
}
const stringBox = new Box<string>("Hello");
console.log(stringBox.getContent()); // Hello
const numberBox = new Box<number>(123);
console.log(numberBox.getContent()); // 123

// Generic Class with Multiple Types:
class Pair<T, U> {
    private key: T;
    private value: U;

    constructor(key: T, value: U) {
        this.key = key;
        this.value = value;
    }

    getKey(): T {
        return this.key;
    }

    getValue(): U {
        return this.value;
    }
}

const pair = new Pair<Number, String>(22, "Age");
console.log(pair.getKey()); // 22
console.log(pair.getValue()); // Age

// Generic Class with Default Type:

class StoraItem<T = string> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const storage = new StoraItem<number>();
storage.addItem(42);
storage.addItem(100);
storage.addItem(108);
console.log(storage.getItems()); // [42, 100, 108]

// Extending Generic Classes:
class GenericBox<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }
    getContent(): T {
        return this.content;
    }
}

class StringBox extends GenericBox<string> {
    constructor(content: string) {
        super(content);
    }
}
const box = new StringBox("Hello");
console.log(box.getContent()); // Hello
