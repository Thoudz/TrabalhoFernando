import Conta from "./conta.js";

class Inter extends Conta {
    constructor(balance) {
        super();
        this.name = "Inter";
        this.balance = balance;
    }
}
const inter = new Inter(200);
export default inter;