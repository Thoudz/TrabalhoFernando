import Equipamento from "./Equipamento.js";

class Software extends Equipamento {
    constructor() {
        super();
        this.setNome('Software');
        this.setPreco(250);
    }
};


export default Software;