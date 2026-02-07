const { createElement } = require("react");

const textIn = document.querySelector('#inputTarefa');
const createBtn = document.querySelector('#createBtn');

const List = document.querySelector('.list');

const Tasks = {
    
    taskList: [],

    createTask: function()
    {
        this.taskList.push(textIn.value)

        return this.taskList.at(-1)
    }
}

function createTasks(newTask)
{
    // Cria a div filha que vai comportar o elemento
    const newDiv = document.createElement('div')
    // Cria a nova lista
    const newTask = document.createElement('li')
    List.classList.add("item")
    // Cria os novos botões

    List.append(newTask);    
}