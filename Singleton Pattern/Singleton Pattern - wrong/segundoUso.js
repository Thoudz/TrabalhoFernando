import mensagemTeste from "./mensagemTeste.js";
const novaMensagem = new mensagemTeste();

export default function mensagemSegundaImplementacao() {
    novaMensagem.printQtdMensagem();
    novaMensagem.texto("Mensagem de teste 2");
    novaMensagem.printQtdMensagem();
}