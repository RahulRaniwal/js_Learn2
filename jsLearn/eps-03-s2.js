const cart = ["shirt", "pant", "shoes"];
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });

// creating promise

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createorderr
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for create order
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment is Sucessfull");
  });
}
function validateCart(cart) {
  return true;
}

// homework
// createOrder , proceedToPayment ,showOrderSummary , updateWallet
