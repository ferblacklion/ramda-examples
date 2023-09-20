export interface IOrderInfo {
  orderId: number;
  userId: string;
  status: string;
  firstName: string;
  lastName: string;
  patientName: string;
  statusDescription: string;
  orderDate: Date;
  shippingAddress: string;
  isActive: boolean;
  medications: string[];
  type: string;
  paymentInfo: string;
  isPaymentDue: boolean;
}
