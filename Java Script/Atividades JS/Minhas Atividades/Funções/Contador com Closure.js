const a = criarContador()
const b = criarContador()

function criarContador()
{
    let valorIni = 0;

    return{
        incrementar()
        {
            valorIni++;
        },
        decrementar()
        {
            valorIni--;
        },
        valor()
        {
            return valorIni;
        }
    }
    
}


b.decrementar()
a.incrementar()
b.decrementar()

console.log(a.valor())
console.log(b.valor())