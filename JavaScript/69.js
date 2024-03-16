// Callback hell

// 3 seconds
function addToCart() {
  console.log("Add to Cart");
}

// 5 seconds
function createOrder() {
  console.log("Order Created");
}

// 2 seconds
function processPayment() {
  console.log("Payment Received");
}

// 1 second
function getOrderDetails() {
  console.log("Order is sucessful! Here is your order details");
}

function orderProduct() {
  setTimeout(() => {
    addToCart();
    setTimeout(() => {
      createOrder();
      setTimeout(() => {
        processPayment();
        setTimeout(() => {
          getOrderDetails();
        }, 1000);
      }, 2000);
    }, 5000);
  }, 3000);
}

orderProduct();
