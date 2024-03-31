import { createTask } from "./task"
import { deleteStorageTitle, deleteStorageTask, delProject } from "./storage"


const projectsTab = document.querySelector(".projects")
let count = 1
export function createProject(title, dueDate, description) {
    
    const projectContainer = document.createElement('button')
    projectContainer.classList = "projectContainer"
    projectContainer.setAttribute("title", title);
    const titleBox = document.createElement('div')
    const dueDateBox = document.createElement('div')
    const descriptionBox = document.createElement('div')
    const delProjectBtn = document.createElement('button')
    delProjectBtn.classList = "delProject"
    delProjectBtn.textContent = "Delete Project"
    titleBox.textContent = title
    dueDateBox.textContent = dueDate
    descriptionBox.textContent = description
    projectContainer.appendChild(titleBox)
    projectContainer.appendChild(dueDateBox)
    projectContainer.appendChild(descriptionBox)
    projectContainer.appendChild(delProjectBtn)
    projectsTab.appendChild(projectContainer)
    
    const addTaskBtn = document.createElement('button')
    addTaskBtn.classList = "addTaskBtn"
    addTaskBtn.textContent = "+"
    projectContainer.appendChild(addTaskBtn)
    count += 1
    localStorage.setItem("project_" + title, dueDate + description)
    addTaskBtn.addEventListener("click", () => {
        createTask(projectContainer, title)
        
    })

    delProjectBtn.addEventListener('click', (event) => {    
        const parentElement = event.target.parentNode;
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
        delProject(parentElement)
    

    })

    
    



}



