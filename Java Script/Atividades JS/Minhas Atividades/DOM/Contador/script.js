const iniciarTimer_btn = document.querySelector('#iniTimer')
const finalizarTimer_btn = document.querySelector('#endTimer')
const textTimer = document.querySelector('.containerTxt')
const limparTimer = document.querySelector('.FinishTimer')

// Eventos


function Createtimer()
{
    let segundos = 0;
    let interval = null;
    return{
        iniciar_Timer(){
            if (interval !== null) return;

            iniciarTimer_btn.classList.add('buttonActive')
            interval = setInterval(() =>
            {
                segundos++;
                textTimer.innerHTML = `Timer: ${segundos} Sec`
            }, 1000)
        },
        parar_Timer(){
            clearInterval(interval)
            interval = null;
            segundos = 0;
            iniciarTimer_btn.classList.remove('buttonActive')
            
            limparTimer.innerHTML = 'Limpando o timer em 5 Sec'
            
            setTimeout(() =>{
                textTimer.innerHTML = 'Timer: 0 Sec'
                limparTimer.innerHTML = ''
                
            }, 5000)
            
        }
    }
}

const timer = Createtimer();


// Não funcionou, com o evento no html funcionou
iniciarTimer_btn.addEventListener('click', timer.iniciar_Timer)
finalizarTimer_btn.addEventListener('click', timer.parar_Timer)