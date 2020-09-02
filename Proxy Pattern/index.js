import AcessoSala from "./AcessoSala.js";
import SistemaSeguranca from "./SistemaSeguranca.js";

const porta = new SistemaSeguranca(new AcessoSala());

porta.abrir("Tomate");

porta.abrir("Batata");

porta.fechar();