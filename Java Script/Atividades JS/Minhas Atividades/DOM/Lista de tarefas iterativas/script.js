
const textIn = document.querySelector('#inputTarefa');
const createBtn = document.querySelector('#createBtn');

const List = document.querySelector('.list');

const Tasks = {
    
    taskList: [
        {task: "Teste", conclude: true, }
    ],

    createTask: function()
    {
        this.taskList.push({task: textIn.value, conclude: false})
        return this.taskList.at(-1)
    }
}

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
function createTasks(newTask)
{
    // Cria a div filha que vai comportar o elemento
    const newDiv = document.createElement('div')
    newDiv.classList.add("group")
    List.append(newDiv)

    // Cria a nova lista
    const newTask = document.createElement('li')
    newTask.classList.add("item")
    newDiv.append(newTask)

    // Cria os novos botões
    // Botão de concluir
    const newConcluirBtn = document.createElement('input')
    button.classList.add("buttons")
    newConcluirBtn.id = "concludeBtn"
    newDiv.append(newConcluirBtn)

}