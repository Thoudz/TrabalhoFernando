export default class mensagemTeste {
    constructor() {
        this.mensagem = [];
    }

    texto(message) {
        this.mensagem.push(message)
        console.log(`Teste: ${ message }`)
    }

    printQtdMensagem() {
        console.log(`${this.mensagem.length} Mensagem`)
    }
}