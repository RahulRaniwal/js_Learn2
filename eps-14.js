// callback function

// setTimeout(function () {
//   console.log("setTimeOut");
// }, 4000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// Event Listner
// document.getElementById("clickMe").addEventListener("click", function abc() {
//   console.log("Button clicked");
// });

function attachEventListeners() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function abc() {
    console.log("Button clicked", ++count);
  });
}

attachEventListeners();
