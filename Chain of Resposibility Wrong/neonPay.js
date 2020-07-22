import Conta from "./conta.js";

class Neon extends Conta {
    constructor(balance) {
        super();
        this.name = "Neon";
        this.balance = balance;
    }
}

const neon = new Neon(100);
export default neon;