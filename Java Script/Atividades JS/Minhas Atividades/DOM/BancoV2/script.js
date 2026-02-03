const saldoText = document.querySelector('.textSaldo');
const avisoText = document.querySelector('.Aviso');
const historic = document.querySelector('#historic');

const depositarBtn = document.querySelector('#depositarBtn');
const sacarBtn = document.querySelector('#sacarBtn');

let valorIn = document.querySelector('.numberIn');

// Função que mostra o aviso
function mostrarAviso(msg)
{
    avisoText.innerText = msg;

    setTimeout(() => {
        avisoText.innerText = '';
    }, 2000);
}

const conta = {
    saldo: 0,
    historico: [],

    // Depositar
    depositar: function(v)
    {

        // Verificação
        if (v <= 0) return false;
        
        this.saldo += v;
        this.historico.push(`+${v}`);
        return true;
    },
    
    //Sacar
    sacar: function(v)
    {
        if (v > this.saldo || v <= 0) return false

        this.saldo -= v;
        this.historico.push(`-${v}`)
        return true
    },
    
    // Atualizar status
    AtualizarStatus: function()
    {
        let item = new Option(this.historico.at(-1))

        saldoText.innerText = `Saldo: ${this.saldo}`
        valorIn.value = '';
        historic.add(item)
    },
}

depositarBtn.addEventListener('click', () => {
    
    const valor = Number(valorIn.value);
    const ok = conta.depositar(valor);

    if (!ok) mostrarAviso("Não é possivel depositar")
    else
    {
        conta.AtualizarStatus()
    }
    
})

sacarBtn.addEventListener('click', () =>{

    const valor = Number(valorIn.value);
    const ok = conta.sacar(valor)

    if (!ok) mostrarAviso("Não é possivel sacar")
    else
    {
        conta.AtualizarStatus()
    }
})
