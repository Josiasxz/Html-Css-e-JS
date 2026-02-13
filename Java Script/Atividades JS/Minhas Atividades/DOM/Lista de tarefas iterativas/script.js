
const textIn = document.querySelector('#inputTarefa');
const createBtn = document.querySelector('#createBtn');

const List = document.querySelector('.list');

const date = new Date()

const Tasks = {
    
    taskList: [
        {task: "Teste", conclude: true, }
    ],

    AddTask: function()
    {
        this.taskList.push({task: textIn.value, conclude: false})
        return this.taskList.at(-1)
    }
}

// Configura os botões (Economia de codigo)
function configureBtn(button, buttonType)
{
    button.setAttribute("type", "button")
    button.classList.add("buttons")
    
    if (buttonType == "concludeBtn")
    {
        button.setAttribute("value", "Concluir")
        button.setAttribute("id", "concludeBtn")
    }
    else if (buttonType == "excludeBtn")
    {
        button.setAttribute("value", "Excluir")
        button.setAttribute("id", "excludeBtn")
    }
    else
    {
        console.log("Erro")
    }
}
// Cria e configura as tasks
function createTasks(newTask)
{
    // Cria a div filha que vai comportar o elemento
    const newDiv = document.createElement('div')
    newDiv.classList.add("group")
    List.append(newDiv)

    // Cria a nova lista
    const newTask = document.createElement('li')
    newTask.classList.add("item")
    newTask.innerText = `constTasks`
    newDiv.append(newTask)

    // Cria os novos botões

    // Botão de concluir
    const newConcluirBtn = document.createElement('input')
    configureBtn(newConcluirBtn, "concludeBtn")
    newDiv.append(newConcluirBtn)

    // Botão de excluir
    const newExcluirBtn = document.createElement('input')
    configureBtn(newExcluirBtn, "excludeBtn")
    newDiv.append(newExcluirBtn)

    // Adiciona data e hora
    const newDataHora = document.createElement('div')

    const nowHour = date.getHours() // Hora
    const nowMinutes = date.getMinutes() // Minutos

    newDataHora.innerText = `${nowHour}:${nowMinutes}`
    
}