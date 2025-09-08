createOrder(cart, function (order) {
  proceedToPayment(order, function (paymentResponse) {
    showOrderSummary(paymentResponse, function (summary) {
      updateWallet(summary, function () {
        console.log("Order completed successfully and wallet updated!");
      });
    });
  });
});
//   Issues with Callback Hell:
//   Readability: The code becomes harder to read and maintain.
//   Error Handling: Handling errors at each level becomes complex.
//   Scalability: Adding more steps makes it even worse.
//   Using Promises to Avoid Callback Hell:
//   Here’s a cleaner way using Promises:

createOrder(cart)
  .then((order) => proceedToPayment(order))
  .then((paymentResponse) => showOrderSummary(paymentResponse))
  .then((summary) => updateWallet(summary))
  .then(() => console.log("Order completed successfully and wallet updated!"))
  .catch((error) => console.error("Error during order processing:", error));

//   Or even better, using async/await:

async function completeOrder(cart) {
  try {
    const order = await createOrder(cart);
    const paymentResponse = await proceedToPayment(order);
    const summary = await showOrderSummary(paymentResponse);
    await updateWallet(summary);
    console.log("Order completed successfully and wallet updated!");
  } catch (error) {
    console.error("Error during order processing:", error);
  }
}

completeOrder(cart);
