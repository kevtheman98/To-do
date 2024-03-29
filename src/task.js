
export function createTask(projectContainer, projectTitle, value = 0) {
    const task = document.createElement('input')
    task.classList = "task"
    task.title = projectTitle
    if (value !== 0 && value) {
        task.value = value
    }
    projectContainer.appendChild(task)
    task.addEventListener("blur", () => {
        localStorage.setItem("task_" + task.title, task.value)
    })
    

}
