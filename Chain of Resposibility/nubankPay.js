import Conta from "./conta.js";

class Nubank extends Conta {
    constructor(balance) {
        super();
        this.name = "Nubank";
        this.balance = balance;
    }
}

const nubank = new Nubank(500);
export default nubank;