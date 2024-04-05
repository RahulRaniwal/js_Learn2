const arr = [1, 4, 5, 6, 7, 3, 9, 8, 2];

// using map function to double the element of arr

function double(val) {
  return val * 2;
}

// double the element
const output = arr.map(double);
// triple the element
const output2 = arr.map(function triple(val) {
  return val * 3;
});
// make binary of a element
const output3 = arr.map((val) => val.toString(2));

// console.log(arr);
// console.log(output);
// console.log(output2);
// console.log(output3);

// filter function is used to filter the values inside the array

// ---------------------filter odd values
const output4 = arr.filter((val) => {
  return val % 2 != 0;
});

const output5 = arr.filter((val) => val > 4);

// console.log(arr);
// console.log(output4);
// console.log(output5);

// ------------------------reduce------------------------

// function findSum(arr) {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   }
//   return sum;
// }

// reduce function take 2 argument

const output6 = arr.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);

// console.log(arr);
// console.log(output6);

// find maximum in array
const output7 = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output7);
