const projectsTab = document.querySelector(".projects")
let count = 1
export function createProject(title, dueDate, description) {
    const projectCountainer = document.createElement('div')
    projectCountainer.classList = count + "projectCountainer"
    count += 1
    const titleBox = document.createElement('div')
    const dueDateBox = document.createElement('div')
    const descriptionBox = document.createElement('div')
    titleBox.textContent = title
    dueDateBox.textContent = dueDate
    descriptionBox.textContent = description
    projectCountainer.appendChild(titleBox)
    projectCountainer.appendChild(dueDateBox)
    projectCountainer.appendChild(descriptionBox)
    projectsTab.appendChild(projectCountainer)
    

}



