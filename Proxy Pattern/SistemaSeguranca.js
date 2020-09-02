export default class SistemaSeguranca {
    constructor(porta) {
        this.porta = porta;
    }
    abrir(senha) {
        if (this.autenticar(senha)) {
            this.porta.abrir();
        } else {
            console.log("Acesso negado!");
        }
    }

    autenticar(senha) {
        return senha === "Batata";
    }

    fechar() {
        this.porta.fechar();
    }
}