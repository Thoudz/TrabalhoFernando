export default class Conta {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Pago ${orderPrice} usando ${this.name}`);
        } else if (this.incomer) {
            console.log(`Você não pode pagar utilizando ${this.name} `);
            this.incomer.pay(orderPrice);
        } else {
            console.log("Infelizmente, não há dinheiro suficiente");
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }

    setNext(conta) {
        this.incomer = conta;
    }

    show() {
        console.log(this);
    }
}