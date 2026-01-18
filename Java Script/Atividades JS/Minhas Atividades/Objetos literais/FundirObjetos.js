const pessoa = {
    nome: "Carlos",
    idade: 21,

    info:function(){
        
        console.log(pessoa.nome)
        console.log(pessoa.idade)
    }
}

const dados = {
    numero: "5506 - 5000",
    pais: "Brasil",
    ano: 2010
}

// Para juntar

const Carlos = Object.assign(pessoa, dados)

console.log(Carlos)

// Deletar propiedades

delete Carlos.idade

console.log(Carlos)