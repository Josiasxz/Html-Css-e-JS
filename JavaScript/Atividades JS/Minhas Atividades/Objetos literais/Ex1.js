function criarConta(iniSaldo)
{   
    let saldo = iniSaldo

    return{

        depositar(v)
        {
            saldo += v;
        },
        sacar(v)
        {
            saldo -= v
        },
        saldo()
        {
            return saldo;
        }
        
    }
}

const conta1 = criarConta(500)
const conta2 = criarConta(500)

conta1.depositar(100)
conta2.depositar(300)

conta1.sacar(300)
conta2.sacar(150)

console.log(`O saldo é de: ${conta1.saldo()}`)
console.log(`Seu saldo é de: ${conta2.saldo()}`)