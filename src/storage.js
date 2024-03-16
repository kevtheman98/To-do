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


    

