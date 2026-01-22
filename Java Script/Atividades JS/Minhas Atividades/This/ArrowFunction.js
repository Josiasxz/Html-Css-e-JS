// Função inteira arrow function
const sum = (a, b) => {
    return a + b;
}

// Função resumida
const som = (a,b) => a + b;

// ------------------- Transformar função em arrow function ----------------------------

// Função
function isAdult(age)
{
    return age >= 18;
}

// Arow Function

const isAdult2 = (age) => 
{
    age >= 18;
}

// Outras funções para gravar

const subtração = (a, b) => a - b;

console.log(subtração(5, 3))

// -------------------------------------------
const data = () => (new Date()).getDate();

// vs

function data2 ()
{
    return (new Date()).getDate();
}
    
console.log(data())
// -------------------------------------------

const horas = () => (new Date()).getHours();

console.log(horas())

// test com this

const arrowthis = (a, b) => console.log(this)


const obj = {
    x: 10,
    mostrar() {
        console.log(this.x);
    }
};

const f = obj.mostrar;
f();
