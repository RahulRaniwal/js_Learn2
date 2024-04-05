// function x() {
//   var i = 10;
//   setTimeout(function () {
//     console.log(i);
//   }, 2000);
//   console.log("js Master Rahul");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Trying to print 1 to 6 one after another");
// }
// x();

// it will print 6 each and every time becoz of closure
// to solve this we can uselet instead of var becoz let has block scope

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }

  console.log("Trying to print 1 to 6 one after another");
}
x(); //   }
//   console.log("Trying to print 1 to 6 one after another");
// }
// x();

// another way of doing this is using another function
