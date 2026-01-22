const conta = {
    saldo: 0,
    
    depoisitar(v){
        this.saldo += v
        console.log(this.saldo)
    },
    sacar(){
        this.saldo -= v
    },
    verSaldo(){
        return this.saldo;
    }
}

conta.depoisitar(200)


const Erradodeposistar = conta.depoisitar

// Erro

Erradodeposistar(300)

// Correção

const verdadeiroDepositar = conta.depoisitar.bind(conta)

verdadeiroDepositar(500)

