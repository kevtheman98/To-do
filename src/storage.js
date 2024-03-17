import create from "./createProjects"
import { createProjects } from "./createProjects"
import makeTask from "./makeTask"

let count = 0
export default function storeProjects(title, duedate, description) {
    const projectData = {
        title: title,
        duedate: duedate,
        description: description
    }
    console.log(projectData)
    const projectString = JSON.stringify(projectData)
    const key = `project_${title}`
    localStorage.setItem(key, projectString)
    
}

export function checkExisting() {
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i)
        if(key.startsWith("project_")) {
            const projectValue = JSON.parse(localStorage.getItem(key));
            createProjects(projectValue.title, projectValue.duedate, projectValue.description)
        }
        
    }
}





    

