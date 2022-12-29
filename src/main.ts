// let hello: string = "hello";
// hello = "hey";
// console.log(hello);

// const functionName = (name: string, surname: string): string => {
//     return name + " " + surname;
// }

// console.log(functionName("Omar", "Hamadou"));

//Object and Interfaces

// interface infoInterface {
//     name: string
//     age?: number //the question mark is to specify that it is not mandatory
// }
// const student: infoInterface = {
//     name : "Omhs",
//     age : 55
// };

// const student1: infoInterface = {
//     name : "student"
// }

// console.log(student.name);

//union operators

interface student {
    name: string
    surname: string
}
let names: string = "neme";

let stuff: string | null = null; //we set it as null so that if another type comes it changes immediatly

let studentInfo: student | null = null;

//type aliases
//Types are entities we can use everywhere in the code

type ID = string;
type SuperFlags = string;

let table: SuperFlags[] = ["one"];

//Union + type alias
//create my custome type alias

type MaybeTag = SuperFlags | null;

let fruits: MaybeTag = "mangoes"; // or i can set it to null;

//void type fuction
//it is a function that doesn't return anything


//assertion
let page: any = "1"; //any is a data type
let pageNumber = page as string;

//htmlInputElement

const someElement = document.querySelector(".class1") as HTMLInputElement;
console.log("one", someElement.value);

//htmlInputElement and eventlistenners

const anotherElement = document.querySelector(".class2");

anotherElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value); 
    
})

//TypeScript classes

class users{
    name: string;
    surname: string;

    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }

    getFullName(name: string, surname: string){
        return (name + " " + this.surname);
    }
}

const user = new users("Omar", "Hamadou");

//Generics in ts
//generics are like placeholders in ts

const newFunction = <T>(items: T[]): T[] => {
    return new Array().concat(items);
}

let firstArray = newFunction<number>([1, 2, 3]);
let secondArray = newFunction<string>(["one", "two"]);

secondArray.push("tzo");
console.log(secondArray);
