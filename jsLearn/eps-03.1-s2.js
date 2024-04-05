const cart = ["shirt", "shoes", "pant"];

// homework
// createOrder  , proceedToPayment , showOrderSummary , updateWallet

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (orderStatus) {
    return showOrderSummary(orderStatus);
  })
  .then(function (orderHistory) {
    return updateWallet(orderHistory);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// createOrer promise
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "345678";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });
}

// proceed to payment
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (orderId) {
      resolve({ paymentStatus: 1, message: "Payment successfull" });
    } else {
      reject(new Error("Payment failed"));
    }
  });
}

// showOrderSummary
function showOrderSummary(orderStatus) {
  return new Promise(function (resolve, reject) {
    if (orderStatus.paymentStatus === 1) {
      resolve({ status: "success", order: carrt });
    } else {
      reject(new Error("Something went wrong"));
    }
  });
}

// updateWallet
function updateWallet(orderHistory) {
  return new Promise(function (resolve, reject) {
    if (orderHistory.status === "success") {
      resolve({ balance: "1000 $", message: "Wallet updated" });
    } else {
      reject(new Error("wallet balance not updated"));
    }
  });
}

function validateCart(cart) {
  return true;
}
