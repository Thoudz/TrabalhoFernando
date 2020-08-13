abstract class PC {
  public descricao!: string;

  public getdescricao(): string {
    return this.descricao;
  }

  public custo!: number;

  public getcusto(): number {
    return this.custo;
  }
}

class pcPhanton extends PC {
  public descricao = "pcPhanton";

  public custo = 2000;

  public ssd() {
    this.descricao += ", com ssd";
    this.custo += 300;
  }

  public waterCooler() {
    this.descricao += ", com water cooler";
    this.custo += 500;
  }
}

class pcMaster extends PC {
  public descricao = "pcMaster";

  public custo = 4000;

  public ssd() {
    this.descricao += ", com ssd";
    this.custo += 300;
  }

  public waterCooler() {
    this.descricao += ", com water cooler";
    this.custo += 500;
  }
}

let meuPC = new pcPhanton();
meuPC.ssd();
meuPC.waterCooler();

console.log(meuPC.getcusto());
console.log(meuPC.getdescricao());
