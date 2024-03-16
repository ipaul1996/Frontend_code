function addToCart() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Add to Cart");
      resolve();
    }, 3000); // 3 seconds
  });
}

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Created");
      resolve();
    }, 5000); // 5 seconds
  });
}

function processPayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment Received");
      resolve();
    }, 2000); // 2 seconds
  });
}

function getOrderDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order is successful! Here are your order details");
      resolve();
    }, 1000); // 1 second
  });
}

function orderProduct() {
  addToCart()
    .then(() => createOrder())
    .then(() => processPayment())
    .then(() => getOrderDetails())
    .then(() => {
      console.log("All operations completed successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the function
orderProduct();
