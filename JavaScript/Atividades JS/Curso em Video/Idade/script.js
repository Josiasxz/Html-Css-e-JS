function calcRes()
{
    var input = document.getElementById('age')
    var age = input.value;

    //Elementos
    var result = window.document.getElementById('res')  
    var checkMas = window.document.getElementById('mas')
    var checkFem = window.document.getElementById('fem')
    var sex = 'indefinido'
    
    // Verificação de sexo
    if (checkMas.checked)
    {
        sex = 'Homem'
    }
    else if (checkFem.checked)
    {
        sex = 'Mulher'
    }
    else
    {
        result.innerHTML = '<strong>[ERRO]</strong> Não foi definido o sexo!'
    }

    if (sex == 'Homem' && age > 2026 || age < 1875)
    {
        result.innerHTML = `Detectamos um ${sex} de ${2026 - age} anos.`
    }
    else if (sex == 'Mulher' && age > 2026 || age < 1875)
    {
        result.innerHTML = `Detectamos um ${sex} de ${2026 - age} anos.`
    }
    else
    {
        result.innerHTML = '<strong>[ERRO]</strong> A idade definida foi invalida'
    }
}
