function Subject() {
    this.observador = []

}

Subject.prototype = {
    inscrito: function(fn) {
        this.observador.push(fn)
    },
    naoinscrito: function(fnToRemove) {
        this.observador = this.observador.filter(fn => {
            if (fn != fnToRemove)
                return fn
        })
    },
    disparar: function() {
        this.observador.forEach(fn => {
            fn.call();
        })
    }
}

const subject = new Subject()

function Observador1() {
    console.log("Observador 1 disparando");
}

function Observador2() {
    console.log("Observador 2 disparando");
}

subject.inscrito(Observador1);
subject.inscrito(Observador2);
//subject.naoinscrito(Observador2);

subject.disparar()