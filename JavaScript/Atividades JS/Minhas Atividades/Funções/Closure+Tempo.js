
function timer()
{
    let timeC = 1;
    let interval = null;

    return{
        tempo()
        {
            return timeC;
        },
        iniciar()
        {
            if (interval !== null) return;
            
            interval = setInterval(() =>
            {
                timeC++;
            }, 1000)
        },
        parar()
        {
            clearInterval(interval)
            interval = null;
        }
    }
}

const timer1 = timer()
const timer2 = timer()

timer1.iniciar()

setTimeout(() =>
{
    timer1.parar()
    console.log(timer1.tempo())
}, 3000)

timer2.iniciar()

setTimeout(() =>
{
    timer2.parar()
    console.log(timer2.tempo())
}, 5000)