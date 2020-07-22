import neon from "./neonPay.js";
import inter from "./interPay.js";
import nubank from "./nubankPay.js";

neon.setNext(inter);
inter.setNext(nubank);

neon.show();

neon.pay(400);