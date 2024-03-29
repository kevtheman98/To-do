
export function createTask(projectContainer, projectTitle, value = 0) {
    const task = document.createElement('input')
    task.classList = "task"
    task.title = projectTitle
    if (value !== 0 && value) {
        task.textContent = value
    }
    projectContainer.appendChild(task)
     
}
