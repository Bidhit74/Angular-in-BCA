var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Generics Classes
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    return Box;
}());
var stringBox = new Box("Hello");
console.log(stringBox.getContent()); // Hello
var numberBox = new Box(123);
console.log(numberBox.getContent()); // 123
// Generic Class with Multiple Types:
var Pair = /** @class */ (function () {
    function Pair(key, value) {
        this.key = key;
        this.value = value;
    }
    Pair.prototype.getKey = function () {
        return this.key;
    };
    Pair.prototype.getValue = function () {
        return this.value;
    };
    return Pair;
}());
var pair = new Pair(22, "Age");
console.log(pair.getKey()); // 22
console.log(pair.getValue()); // Age
// Generic Class with Default Type:
var StoraItem = /** @class */ (function () {
    function StoraItem() {
        this.items = [];
    }
    StoraItem.prototype.addItem = function (item) {
        this.items.push(item);
    };
    StoraItem.prototype.getItems = function () {
        return this.items;
    };
    return StoraItem;
}());
var storage = new StoraItem();
storage.addItem(42);
storage.addItem(100);
storage.addItem(108);
console.log(storage.getItems()); // [42, 100, 108]
// Extending Generic Classes:
var GenericBox = /** @class */ (function () {
    function GenericBox(content) {
        this.content = content;
    }
    GenericBox.prototype.getContent = function () {
        return this.content;
    };
    return GenericBox;
}());
var StringBox = /** @class */ (function (_super) {
    __extends(StringBox, _super);
    function StringBox(content) {
        return _super.call(this, content) || this;
    }
    return StringBox;
}(GenericBox));
var box = new StringBox("Hello");
console.log(box.getContent()); // Hello
