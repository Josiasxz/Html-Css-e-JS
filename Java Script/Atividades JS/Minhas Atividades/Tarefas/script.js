let tarefas = []

function createTask()
{
    
    let input = window.document.getElementById('taskAdd')
    let list = window.document.getElementById('list')
    
    if(input.value.trim() == '')
    {
        window.alert('Digite uma tarefa!')
    }
    else
    {
        tarefas.push(input.value)
        item = window.document.createElement('li')
        item.textContent = input.value
        
        list.appendChild(item)
    }    
        
}