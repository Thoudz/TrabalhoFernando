class Analise {
    constructor(opniao, nota) {
        this.opniao = opniao;
        this.nota = nota;
    }
}
// = 'genero não definido'
class Jogo {
    constructor(nome, descricao, genero, analise) {
        this.nome = nome;
        this.descricao = descricao;
        this.genero = genero;
        this.analise = analise;
    }
}
const jogo1 = new Jogo(
    "Resident Evil",
    undefined,
    undefined,
    new Analise("muito bom", "10")
);

console.log(jogo1);