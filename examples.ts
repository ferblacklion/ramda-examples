import * as R from "ramda";
import { IOrderInfo } from "./types";
import { orders } from "./data";

const mapOrderCategory = R.cond([
  [R.equals("RX"), R.always("RX_NEW")],
  [R.equals("FILL"), R.always("FILL_NEW")],
  [R.equals("REFILL"), R.always("REFILL_NEW")],
  [R.equals("ORDER"), R.always("ORDER_NEW")],
]);

const parseId = R.cond([
  [R.anyPass([R.isNil, R.isEmpty]), R.always(null)],
  [R.anyPass([R.is(String), R.is(Number)]), (t: string) => parseInt(t, 10)],
]);

const createOrderModel = R.applySpec<IOrderInfo>({
  userId: R.pipe(R.prop<keyof IOrderInfo, string>("userId"), parseId),
  orderId: R.pipe(R.prop<keyof IOrderInfo, string>("orderId"), parseId),
});

const dataMapped = orders.map(createOrderModel);

console.log("dataMapped :>> ", dataMapped);
