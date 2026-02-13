
const textIn = document.querySelector('#inputTarefa');
const createBtn = document.querySelector('#createBtn');

const List = document.querySelector('.list');

const date = new Date()

const Tasks = {
    
    taskList: [
        {task: "Teste", conclude: true, id: 0}
    ],

    AddTask: function()
    {
        
        this.taskList.push({task: textIn.value, conclude: false, id: 0})
        const theTask = this.taskList[this.taskList.length - 1]
        theTask.id = this.taskList.length - 1
        return this.taskList.at(-1)
    },

    ConcludeTask: function(idTaskConclude)
    {
        const taskConclude = this.taskList.find(taskList => taskList.idTaskConclude)
        taskConclude.conclude = true
    },
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
function createTasks(Task)
{
    // Cria a div filha que vai comportar o elemento
    const newDiv = document.createElement('div')
    newDiv.classList.add("group")
    List.append(newDiv)

    // Cria a nova lista
    const newTask = document.createElement('li')
    newTask.classList.add("item")
    newTask.innerText = Task.task
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
    newDataHora.classList.add('horaTxt')

    const nowHour = date.getHours() // Hora
    const nowMinutes = date.getMinutes() // Minutos

    newDataHora.innerText = `${nowHour}:${nowMinutes}`
    newDiv.append(newDataHora)
    
}

function concludeTask()
{
    
}

createBtn.addEventListener('click', () => {
    const newTask = Tasks.AddTask() // Pega o valor da task adicionada
    
    createTasks(newTask) // Cria as tasks
})