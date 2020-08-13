abstract class PC {
  public descricao!: string;

  public getdescricao(): string {
    return this.descricao;
  }

  public abstract custo(): number;
}

class pcPhanton extends PC {
  public descricao = "pcPhanton";

  public custo(): number {
    return 2000;
  }
}

class pcMaster extends PC {
  public descricao = "pcMaster";

  public custo(): number {
    return 4000;
  }
}

abstract class PCOptions extends PC {
  upgradePC!: PC;
  public abstract getdescricao(): string;
  public abstract custo(): number;
}

class ssd extends PCOptions {
  upgradePC!: PC;

  constructor(PC: PC) {
    super();
    this.upgradePC = PC;
  }

  public getdescricao(): string {
    return this.upgradePC.getdescricao() + ", com ssd";
  }
  public custo(): number {
    return this.upgradePC.custo() + 300;
  }
}

class waterCooler extends PCOptions {
  upgradePC!: PC;

  constructor(PC: PC) {
    super();
    this.upgradePC = PC;
  }

  public getdescricao(): string {
    return this.upgradePC.getdescricao() + ", com Water Cooler";
  }
  public custo(): number {
    return this.upgradePC.custo() + 500;
  }
}

let meuPC = new pcPhanton();

meuPC = new waterCooler(meuPC);
//meuPC = new ssd(meuPC);

console.log(meuPC.custo());
console.log(meuPC.getdescricao());
