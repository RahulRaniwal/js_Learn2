/***
 * what is aysnc
 * what is await
 * How async await works behind the scene
 * Examples of using async await
 * Error handeling
 * Interview qsns
 * Async await vs promise .then/.catch
 */

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Simple promise using async await");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Simple promise using async await promise 2");
//   }, 8000);
// });

// async function getData() {
//   return p;
//   //   return "Rahul Raniwal";
// }

// const dataPromise = getData();
// // console.log(dataPromise);

// dataPromise.then((res) => {
//   console.log(res);
// });

// how we handle this with async and await
// async function handlePromise() {
//   console.log("Hello Js");
//   const value = await p1; // await can only be used inside async function
//   console.log("Rahul Js master");
//   console.log(value);

//   const value2 = await p2;
//   console.log("Promise 2");
//   console.log(value2);
// }

const API_URL = "https://api.github.com/users/RahulRaniwal";

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();

// how we handle promise witout async and await

// function getData() {
//   p.then((res) => {
//     console.log(res);
//   });
// }
// getData();
