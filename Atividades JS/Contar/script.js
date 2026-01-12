// Objetos no html
var inicioIn = document.getElementById('numberIn')
var fimIn = document.getElementById('endIn')
var passoIn = document.getElementById('passIn')
var text = document.getElementById('text')

// Valores


function count()
{
    var inicioN = Number(inicioIn.value)
    var fimN = Number(fimIn.value)
    var passoN = Number(passoIn.value)
    
    if (passoN <= 0 || passoN > fimN)
    {
        text.innerText = "Passo invalido"
        return
    }

    text.innerHTML = ''
    for(var i = inicioN; i <= fimN; i += passoN)
{
    
    if (i < fimN)
    {
        text.innerText += `${i},`
    }
    else if (i == fimN)
    {
        text.innerText += `${i}`
    }
}
}




