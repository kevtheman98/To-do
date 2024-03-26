const projectsTab = document.querySelector(".projects")

export function createProject(title, dueDate, description) {
    const titleBox = document.createElement('div')
    const dueDateBox = document.createElement('div')
    const descriptionBox = document.createElement('div')
    titleBox.textContent = title
    dueDateBox.textContent = dueDate
    descriptionBox.textContent = description
    projectsTab.appendChild(titleBox)
    projectsTab.appendChild(dueDateBox)
    projectsTab.appendChild(descriptionBox)
    

}



