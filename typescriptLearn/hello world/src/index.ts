// // console.log("Hello world");

// let a: number = 69;
// if (a < 90) {
//   a += 10;
// }
// console.log(a);

// let sales = 123_456_789; // number type
// let course = "TypeScript"; // string
// let isPublished = true; // boolean
// let level; // any

// function render(docs) {
//   console.log(docs);
// }

/****************** ARRAY ******************/

// let number: number[] = [1, 2, 3, 4, 5];

// /****************** Tupple **********************/
// // tuple is like fixed length array but they are usefull when we have key value pair

// let user: [number, string] = [1, "Rahul"];

// /******************* ENUM **********************/

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// } // next value will be in continuation like 2 3
// const enum Size2 {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

/****************** Function *************************/

// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 2021) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// calculateTax(60_00_00, 2023);

// function calculateTax(income: number, taxYear = 2023): number {
//   if (taxYear < 2021) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// calculateTax(60_00_00, 2023);

/**************** Object ***********************/

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Raniwal",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// employee.name = "Rahul";
// console.log(employee.name);

/**************** Type Alias *******************/

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee1: Employee = {
//   id: 1,
//   name: "Mosh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// /***************** Union Type ******************/
// function kgToLbs(weight: number | string): number {
//   // Narrowing
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs("10kg");

/****************** InterSection Type *********************/

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UiWidget = Draggable & Resizable;

// let textBox: UiWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// /*************** Literal Type ********************/
// type Quantity = 50 | 20;
// let quantity: Quantity = 20;

/************* Nullable Type *************/

// function greet(name: string | null) {
//   if (name) {
//     console.log(name.toUpperCase());
//   } else {
//     console.log("Hola Amigo!!");
//   }
// }

// greet(null);

/************* Optional Chaining****************/
