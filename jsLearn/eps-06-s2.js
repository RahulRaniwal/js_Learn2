"use strict";

// this is global space
// console.log(this);

// this inside a function
function x() {
  // value depends on strict and non strict mode
  console.log(this);
}
// x();

// this in strict mode - (this substitution)

// if the value of this keyword is undefined or null
// this will be replaced with global object
// only in non strict mode

// this value depends on how this is called (window)

// x(); // value will be undefined
// window.x(); // value will be window

// this inside a object's method

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};

// obj.x();

const studnet1 = {
  name: "Rahul",
  printName: function () {
    console.log(this.name);
  },
};

// studnet1.printName();

const studnet2 = {
  name: "Piyush",
};
// call apply and bind (sharing method)
// studnet1.printName.call(studnet2);

// call apply bind methods (sharing method)

// this inside arrow function

const obj2 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj2.x();

// this  inside nested arrow function

const obj3 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj3.x();

// this inside dom

// value of this inside DOM element is reference to HTML Element
