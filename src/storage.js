import { createProject } from "./projects";
import { createTask } from "./task";
export function store() {
    const projectContainers = document.querySelectorAll(".projectContainer");

    // Loop through each project container
    projectContainers.forEach(project => {
        const projectTitle = project.getAttribute("title");

        // Find tasks within the current project container
        const projectTasks = project.querySelectorAll(".task");

        // Loop through each task within the current project container
        projectTasks.forEach((task, index) => {
            // Store task values in local storage with a key based on project title and task index
            localStorage.setItem(`task_${projectTitle}_${index}`, task.value);
        });
    });
}

export function projectsRetrive() {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        if(key.startsWith("project_")) {
            const title = key.substring(8)
            const dueDate = value.substring(0, 10)
            const description = value.substring(10) 

            createProject(title, dueDate, description)

        }
    }
}
export function tasksRetrive() {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        if(key.startsWith("task_")) {
            const titleLink = key.substring(5, key.length - 2)
            const projectsList = document.querySelectorAll(".projectContainer")
            for(let i = 0; i < projectsList.length; i++) {
                if(projectsList[i].getAttribute("title") == titleLink) {
                    createTask(projectsList[i], projectsList[i].getAttribute("title"), value)
                    
                }
            }
        }
        
    }
}
        

