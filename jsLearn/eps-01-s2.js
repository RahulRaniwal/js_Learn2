// console.log("Rahul");

// setTimeout(function () {
//   console.log("Burrraaaahh");
// }, 5000);

// console.log("Raniwal");

const cart = ["shirt", "jeans", "t-shirt"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

/* we have created an order
now after order is created we proceeded to payment
what if we need to show in order summary
what if we also wanted update the order*/

// this will create a callback hell
// this structure is called pyramid of doom

// Inversion of control
// we loose control of our programme becoz of
// random check
