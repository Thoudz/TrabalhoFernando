class Analise {
    constructor(opniao, nota) {
        this.opniao = opniao;
        this.nota = nota;
    }
}

class Jogo {
    constructor(nome) {
        this.nome = nome;
    }
}

class JogoBuilder {
    constructor(nome) {
        this.jogo = new Jogo(nome);
    }

    setDescricao(descricao) {
        this.jogo.descricao = descricao;
        return this;
    }
    setGenero(genero) {
        this.jogo.genero = genero;
        return this;
    }
    setAnalise(analise) {
        this.jogo.analise = analise;
        return this;
    }
    build() {
        return this.jogo;
    }
}

let jogo1 = new JogoBuilder("Resident Evil")
    .setAnalise(new Analise("muito bom", "10"))
    .setDescricao("É um jogo de terror")
    .build();
let jogo2 = new JogoBuilder("Homem aranha").build();
console.log(jogo1, jogo2);