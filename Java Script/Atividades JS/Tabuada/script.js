function calcTab()
{
    let select = document.getElementById('sel')
    let inputN = document.getElementById('numIn')
    
    // Segurança
    if (inputN.value == 0)
    {
        window.alert("DIGITE UM VALOR VALIDO")
    }
    else
    {
        select.innerHTML = ''
        let num = Number(inputN.value)
        let valueT = 0;
        for(let i = 1; i <= 10; i++)
        {
            item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            select.appendChild(item)
            
        }
    }
}