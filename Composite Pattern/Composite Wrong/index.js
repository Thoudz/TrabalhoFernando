import Software from "./Software.js";
import Hardware from "./Hardware.js";
import Body from "./Body.js";
import Equipamento from "./Equipamento.js";

class Notebook extends Equipamento {
    constructor() {
        super();
        this.setNome("Acer Nitro 5");
        this.equipamentos = [];
    }

    add(equipamento) {
        return this.equipamentos.push(equipamento);
    }
}

const meuNotebook = new Notebook();
console.log(meuNotebook);

let hard = new Hardware();
let soft = new Body();
let body = new Software();

meuNotebook.add(hard);
meuNotebook.add(soft);
meuNotebook.add(body);

let precoTotal = hard.preco + soft.preco + body.preco;

console.log("O preço total do notebook é " + precoTotal + "$");

//console.log(`${meuNotebook.getNome()} tem o valor de ${meuNotebook.getPreco()}$`)