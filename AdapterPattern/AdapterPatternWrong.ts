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

//executando
let monitorAcer = new monitorHdmi();
monitorAcer.useHDMI();
monitorAcer.useVGA();
