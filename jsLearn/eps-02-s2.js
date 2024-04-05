// const cart = ["shirts", "pant", "shoes"];

// createOrder(cart); // orderId aayegi yaha se

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users/RahulRaniwal";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

// promise chaining

const cart = ["shirts", "pant", "shoes"];

createOrder(cart); // orderId aayegi yaha se

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo);
  });
