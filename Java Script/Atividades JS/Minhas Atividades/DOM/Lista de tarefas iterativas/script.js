
const textIn = document.querySelector('#inputTarefa');
const createBtn = document.querySelector('#createBtn');

const List = document.querySelector('.list');

const Tasks = {
    
    taskList: [
        {task: "Teste", conclude: true, }
    ],

    createTask: function()
    {
        this.taskList.push(task: textIn.value, )

        return this.taskList.at(-1)
    }
}

function configureButton(button)
{

}

function createTasks(newTask)
{
    // Cria a div filha que vai comportar o elemento
    const newDiv = document.createElement('div')
    newDiv.classList.add("group")
    List.append(newDiv)

    // Cria a nova lista
    const newTask = document.createElement('li')
    List.classList.add("item")

    // Cria os novos botões
    const newConcluirBtn = document.createElement('input')

    List.append(newTask);    
}