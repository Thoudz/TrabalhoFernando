import Equipamento from "./Equipamento.js";

class Body extends Equipamento {
    constructor() {
        super();
        this.setNome('Body');
        this.setPreco(500);
    }
};


export default Body;