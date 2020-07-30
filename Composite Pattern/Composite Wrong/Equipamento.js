export default class Equipamento {
    getPreco() {
        return this.preco || 0;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setPreco(preco) {
        this.preco = preco;
    }

};