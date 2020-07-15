//A entrada das telas que os monitores usam
interface interfaceHdmi {
  useHDMI(): void;
}
interface interfaceVga {
  useVGA(): void;
}
//monitores que utilizam as entradas hdmi e vga
class monitorHdmi implements interfaceHdmi {
  useHDMI() {
    console.log("Usando HDMI");
  }
}

class monitorVga implements interfaceVga {
  useVGA() {
    console.log("Usando VGA");
  }
}
//conversor de HDMI para VGA
class hdmiParaVga implements interfaceVga {
  monitor: interfaceHdmi;

  constructor(telaHdmi: interfaceHdmi) {
    this.monitor = telaHdmi;
  }

  useVGA() {
    this.monitor.useHDMI();
    console.log("Utilizando entrada HDMI, convertido para VGA..... ");
  }
}
//executando
let monitorAcer = new monitorHdmi();

let conversor = new hdmiParaVga(monitorAcer);

conversor.useVGA();
