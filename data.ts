export const payment = {
  total: 34.4,
  subtotal: 0,
  tax: 0,
  shipping: 0,
};

export const medication = [
  {
    medicationName: "Artemether",
    dosageQuantity: "59.0000",
    dosageSupply: "5",
    rxNumber: "12124",
    paymentInfo: payment,
    isArchived: false,
  },
  {
    medicationName: "Dolo",
    dosageQuantity: "59.0000",
    dosageSupply: "5",
    rxNumber: "12123",
    paymentInfo: payment,
    isArchived: false,
  },
];
export const orders = [
  {
    userId: "1",
    orderId: 1,
    firstName: "Current",
    lastName: "Order",
    patientName: "Current Order",
    status: "Order Placed",
    statusDescription: "Working on your order",
    shippingAddress: "NewYork",
    isActive: true,
    orderDate: new Date("05/05/2022").toString(),
    type: "RX",
    medications: medication,
    paymentInfo: payment,
    isPaymentDue: false,
  },
];
