// let hello: string = "hello";
// hello = "hey";
// console.log(hello);
var names = "neme";
var stuff = null; //we set it as null so that if another type comes it changes immediatly
var studentInfo = null;
var table = ["one"];
var fruits = "mangoes"; // or i can set it to null;
//void type fuction
//it is a function that doesn't return anything
//assertion
var page = "1"; //any is a data type
var pageNumber = page;
//htmlInputElement
var someElement = document.querySelector(".class1");
console.log("one", someElement.value);
//htmlInputElement and eventlistenners
var anotherElement = document.querySelector(".class2");
anotherElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
//TypeScript classes
var users = /** @class */ (function () {
    function users(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    users.prototype.getFullName = function (name, surname) {
        return (name + " " + this.surname);
    };
    return users;
}());
var user = new users("Omar", "Hamadou");
//Generics in ts
//generics are like placeholders in ts
var newFunction = function (items) {
    return new Array().concat(items);
};
var firstArray = newFunction([1, 2, 3]);
var secondArray = newFunction(["one", "two"]);
secondArray.push("tzo");
console.log(secondArray);
