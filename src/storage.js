let count = 0
export default function storeProjects(title, duedate, description) {
    const projectData = {
        title: title,
        duedate: duedate,
        description: description
    }
    console.log(projectData)
    const projectString = JSON.stringify(projectData)
    const key = `project_${count += 1}`
    localStorage.setItem(key, projectString)
    
}

export default function checkExisting() {
    if (localStorage.getItem(project_1)) {
        for (let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i)
            if(key.startsWith("project_")) {
                const projectValue = JSON.parse(localStorage.getItem(key));
            }else if (key.startsWith("tasksFor")) {
                const taskValue = JSON.parse(localStorage.getItem(key))
            }
        }
    }
}




    

