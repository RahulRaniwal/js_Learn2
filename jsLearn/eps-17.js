const radii = [3, 1, 2, 4];

// // calculate area
// const calculateArea = function (radius) {
//   const area = [];
//   for (let i = 0; i < radius.length; i++) {
//     area.push(Math.PI * radius[i] * radius[i]);
//   }
//   return area;
// };

// // calculate circumference
// const calculateCircumference = function (radius) {
//   const circum = [];
//   for (let i = 0; i < radius.length; i++) {
//     circum.push(2 * Math.PI * radius[i]);
//   }
//   return circum;
// };

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));

// In the above code we repeating code

// optimized version

const calcArea = function (radius) {
  return Math.PI * radius * radius;
};

const calcCircum = function (radius) {
  return 2 * Math.PI * radius;
};

const calculations = function (radii, logic) {
  const output = [];
  for (let i = 0; i < radii.length; i++) {
    output.push(logic(radii[i]));
  }
  return output;
};

console.log(calculations(radii, calcArea));
console.log(calculations(radii, calcCircum));
