import makeTask from "./makeTask"
import storeProjects from "./storage"





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
        storeProjects(title.value, duedate.value, description.value)
    

        
    })
    

    let count = 0
    function createProjects() {
        const content = document.querySelector('.content')
        const projectBox = document.createElement('button')
        projectBox.classList = "projectBox"
        count += 1
        projectBox.setAttribute('title', title.value)
        projectBox.setAttribute('duedate', duedate.value)
        projectBox.setAttribute('description', description.value)
        projectBox.setAttribute('id', count)
        
        const newTitle = document.createElement('div')
        newTitle.textContent = title.value
        newTitle.classList = 'projectTitle'
        const newdueDate = document.createElement('div')
        newdueDate.textContent = duedate.value
        newdueDate.classList = 'dueDate'
        const newDescription = document.createElement('div')
        newDescription.textContent = description.value
        newDescription.classList = 'description'
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
                    makeTask(projectList[i].title, projectList[i])
                    
                }
                console.log("This odnt work")

            }
            
        })
        
        
    }
    
}


