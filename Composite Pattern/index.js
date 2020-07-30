import Software from "./Software.js";
import Hardware from "./Hardware.js";
import Body from "./Body.js";

import Composite from "./Composite.js";

class Notebook extends Composite {
    constructor() {
        super();
        this.setNome("Acer Nitro 5");
    }
}

const meuNotebook = new Notebook();

meuNotebook.add(new Hardware());
meuNotebook.add(new Body());
//meuNotebook.add(new Software());
console.log(meuNotebook);
console.log(
    `${meuNotebook.getNome()} tem o valor de ${meuNotebook.getPreco()}$`
);