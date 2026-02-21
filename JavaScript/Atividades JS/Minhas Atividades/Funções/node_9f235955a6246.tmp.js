let timer1 = timer();
let timer2 = timer();


function timer()
{
    let timeC = 0;
    let interval;

    return{
        tempo()
        {
            console.log(timeC)
        },
        iniciar()
        {
            let interval = setInterval(() =>
            {
                timeC++;
            }, 1000)
        },
        parar()
        {
            clearInterval(interval)
        }
    }
}


timer1.iniciar()

setTimeout(() =>
{
    timer1.parar()
}, 3000)

console.log(timer1.timeC)