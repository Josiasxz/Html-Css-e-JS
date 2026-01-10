function calcRes()
{
    var age = document.querySelector('#age')

    //Elementos
    var result = window.document.getElementById('res')  
    var checkMas = window.document.getElementById('mas')
    var checkFem = window.document.getElementById('fem')
    var sex = 'indefinido'
    
    // Verificação de idade
    if (age > 2026 || age < 1875)
        result.innerHTML = `<strong>[ERRO]</strong> Ano ${age} invalido! `
    
    // Verificação de sexo
    if (checkMas.checked)
    {
        sex = 'Masculino'
    }
    else if (checkFem.checked)
    {
        sex = 'Feminino'
    }
    else
    {
        result.innerHTML = '<strong>[ERRO]</strong> Não foi definido sexo!'
    }

    
}
