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

function calculateTax(income: number, taxYear = 2023): number {
  if (taxYear < 2021) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(60_00_00, 2023);
