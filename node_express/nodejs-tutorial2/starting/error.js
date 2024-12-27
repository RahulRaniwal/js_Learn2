// Using Error object
const err = new Error("Something went wrong!");
// console.log(err.message);

const { customError } = require("./customError");
//throw new customError("This is a custom error message");

/********************************** */
// handle exception using try and catch

const doSomething = () => {
  const data = fetch("localhost:3000/api");
};
// try {
//   doSomething();
// } catch (error) {
//   console.log("Error Ouccured ", error);
// }

/************************************************ */
// Uncaught exception

// process.on("uncaughtException", (err) => {
//   console.log("There was an uncaughtException", err);
//   process.exit(1);
// });

// doSomething();

/********************************************** */
// Exception with promises

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

/**************************************************** */
// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("Error Occured", err);
//   });

/********************************************** */
// Using asysnc await
const someFunction = async () => {
  try {
    await doSomething();
  } catch (error) {
    throw customError(err.message);
  }
};

someFunction();
