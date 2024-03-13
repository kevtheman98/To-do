import addTask from "./makeTask"
import deleteTask from "./taskSettings"

export default function create() {
    const dialog = document.querySelector("dialog")
    const newListButton = document.querySelector("button")
    const container = document.querySelector(".content")
    const confirmBtn = document.querySelector("#confirmBtn")
    newListButton.addEventListener("click", () => {
        dialog.showModal();
        
    })
    
    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault();
        dialog.close(title.value, duedate.value, description.value)
        createProjects()

        
    })
    let count = 0
    function createProjects() {
        const content = document.querySelector('.content')
        const projectBox = document.createElement('button')
        projectBox.classList = "projectBox"
        count += 1
        projectBox.setAttribute('title', title.value)
        projectBox.setAttribute('id', count)
        const newTitle = document.createElement('div')
        newTitle.textContent = title.value
        const newdueDate = document.createElement('div')
        newdueDate.textContent = duedate.value
        const newDescription = document.createElement('div')
        newDescription.textContent = description.value
        content.appendChild(projectBox)
        projectBox.appendChild(newTitle)
        projectBox.appendChild(newdueDate)
        projectBox.appendChild(newDescription)
        const createTask = document.createElement('button')
        createTask.setAttribute('id', count)
        createTask.classList = "tasks"
        projectBox.appendChild(createTask)
        const projectList = document.querySelectorAll('.projectBox')
        createTask.addEventListener('click', () => {
            for(let i = 0; i < projectList.length;i++){
                const projectId = projectList[i].id
                if(projectId == createTask.id) {
                    addTask(projectList[i])
                    
                    
                }
                console.log("This odnt work")

            }
            
        })
        
        
    }
   
    
}

