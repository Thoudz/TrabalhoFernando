import mensagemTeste from './mensagemTeste.js'
const novaMensagem = new mensagemTeste()

export default function mensagemPrimeiraImplementacao() {
    novaMensagem.printQtdMensagem();
    novaMensagem.texto('Mensagem de teste 1');
    novaMensagem.printQtdMensagem();
}