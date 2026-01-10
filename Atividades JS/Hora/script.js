// Horario
var date = new Date()
var hour = date.getHours()

//Elementos
var image = window.document.querySelector('#imaDiv')
var hourText = window.document.querySelector('#text')
var backColor = window.document.body

if (hour < 12)
{
    image.style.backgroundImage = "url('img/manhã.jpg')"
    hourText.innerHTML = `Agora são ${hour} horas.`
    backColor.style.backgroundColor = 'rgb(156, 130, 12)'
}
else if (hour < 18)
{
    image.style.backgroundImage = "url('img/tarde.jpg')"
    hourText.innerHTML = `Agora são ${hour} horas.`
    backColor.style.backgroundColor = 'rgb(163, 95, 7)'
}
else
{
    image.style.backgroundImage = "url('img/noite.jpg')"
    hourText.innerHTML = `Agora são ${hour} horas.`
    backColor.style.backgroundColor = 'rgb(0, 3, 31)'
}

