let saldoText = document.querySelector('.textSaldo');
let avisoText = document.querySelector('.Aviso')

let depositarBtn = document.querySelector('#depositarBtn');
let sacarBtn = document.querySelector('#sacarBtn');

let valorIn = document.querySelector('.numberIn');

// Verificação
const conta = {
    saldo: 0,

    // Depositar
    depositar: function(v)
    {
        let valorN = Number(valorIn.value);

        // Verificação
        if (valorN <= 0)
        {
            avisoText.innerText = 'Não é possivel depositar!'

            setTimeout(() =>{
                avisoText.innerText = ''
            },2000)
        }
        // Deposita o valor ao saldo
        else
        {
            this.saldo += valorN
        }
    },
    sacar: function(v)
    {
        let valorN = Number(valorIn.value)
        if (valorN > this.saldo || valorN <= 0)
        {
            avisoText.innerText = 'Não é possivel sacar'

            setTimeout(() =>
            {
                avisoText.innerText = ''
            }, 2000)
        }
        else
        {
            this.saldo -= valorN
        }
    },
    // Vejo o saldo
    verSaldo: function()
    {
        saldoText.innerText = `Saldo: ${this.saldo}`
    }
}

depositarBtn.addEventListener('click', () => {
    conta.depositar()
    conta.verSaldo()
})

sacarBtn.addEventListener('click', () =>{
    conta.sacar()
    conta.verSaldo()
})
