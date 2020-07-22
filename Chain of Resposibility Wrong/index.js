import neon from "./neonPay.js";
import inter from "./interPay.js";
import nubank from "./nubankPay.js";

let valorPagar = 501;

if (valorPagar <= 100) {
    neon.show();
    neon.pay(valorPagar);
} else if (valorPagar <= 200) {
    inter.show();
    inter.pay(valorPagar);
} else {
    nubank.show();
    nubank.pay(valorPagar);
}