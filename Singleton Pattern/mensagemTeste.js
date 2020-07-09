class mensagemTeste {
    constructor() {
        if (mensagemTeste.instance == null) {
            this.mensagem = [];
            mensagemTeste.instance = this;
        }
        return mensagemTeste.instance;
    }

    texto(message) {
        this.mensagem.push(message);
        console.log(`Teste: ${message}`);
    }

    printQtdMensagem() {
        console.log(`${this.mensagem.length} Mensagem`);
    }
}

const novaMensagem = new mensagemTeste();
Object.freeze(novaMensagem);
export default novaMensagem;