import { delTask, remove } from "./storage"
let count = 0
export function createTask(projectContainer, projectTitle, value, total) {
    if(total) {
        count = total        
    }
    
    const taskContainer = document.createElement('div')
    taskContainer.classList = "taskContainer"
    taskContainer.id = "task_" + projectTitle + "_" + count
    taskContainer.title = projectTitle
    const task = document.createElement('input')
    task.classList = "task"
    task.title = projectTitle 
    count += 1
    if (value !== 0 && value) {
        task.value = value
    }
    const taskDel = document.createElement("button")
    taskDel.classList = "taskDel"
    taskDel.textContent = "X"
    projectContainer.appendChild(taskContainer)
    taskContainer.appendChild(task)
    taskContainer.appendChild(taskDel)

    taskDel.addEventListener('click', (event) => {    
        const parentElement = event.target.parentNode;
        parentElement.remove() 
        delTask(parentElement)
    

    })
        
    
    

}
