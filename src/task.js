import { delTask } from "./storage"
let count = 1
export function createTask(projectContainer, projectTitle, value = 0) {
    
    const taskContainer = document.createElement('div')
    taskContainer.classList = "taskContainer"
    taskContainer.title = "task_" + projectTitle + "_" + count
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
