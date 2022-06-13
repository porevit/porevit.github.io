var Options = {
  options: {
    fullScreen: true,
    fee: true,
    title: "Buy me pls.",
    css: "bootstrap4",
  },
  params: {
    merchant_id: 1396424,
    currency: "USD",
    order_id: new Date().getTime(),
    amount: 5000,
    order_desc: "Test payment",
  },
};
fondy("#checkout-container", Options);
