import Equipamento from "./Equipamento.js";

export default class Composite extends Equipamento {
    constructor() {
        super();
        this.equipamentos = [];
    }
    add(equipamento) {
        this.equipamentos.push(equipamento);
    }
    getPreco() {
        return this.equipamentos
            .map(equipamento => equipamento.getPreco())
            .reduce((a, b) => a + b);
    }
}