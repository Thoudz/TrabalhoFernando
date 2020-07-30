import Equipamento from "./Equipamento.js";

class Hardware extends Equipamento {
    constructor() {
        super();
        this.setNome('Hardware');
        this.setPreco(2000);
    }
};

export default Hardware;