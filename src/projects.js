import { createTask } from "./task"


const projectsTab = document.querySelector(".projects")
let count = 1
export function createProject(title, dueDate, description) {
    const projectContainer = document.createElement('button')
    projectContainer.classList = "projectContainer"
    projectContainer.title = title
    const titleBox = document.createElement('div')
    const dueDateBox = document.createElement('div')
    const descriptionBox = document.createElement('div')
    titleBox.textContent = title
    dueDateBox.textContent = dueDate
    descriptionBox.textContent = description
    projectContainer.appendChild(titleBox)
    projectContainer.appendChild(dueDateBox)
    projectContainer.appendChild(descriptionBox)
    projectsTab.appendChild(projectContainer)
    const addTaskBtn = document.createElement('button')
    addTaskBtn.classList = "addTaskBtn"
    projectContainer.appendChild(addTaskBtn)
    count += 1
    localStorage.setItem
    addTaskBtn.addEventListener("click", () => {
        createTask(projectContainer, title)
        
    })
    

}



