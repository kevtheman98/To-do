import { createProject } from "./projects";
import { createTask } from "./task";
const dialog = document.querySelector('dialog')
const confirm = document.querySelector("#confirmBtn")
const addProjectBtn = document.querySelector(".addProject")
let titleVal = ""
let dueDateVal = ""
let descriptionVal = ""
let count = 0


addProjectBtn.addEventListener("click", () => {
    dialog.showModal();
})
confirm.addEventListener("click", function(event) {
    event.preventDefault(); 
    titleVal = document.querySelector("#title").value;
    dueDateVal = document.querySelector("#duedate").value
    descriptionVal = document.querySelector("#description").value
    if(titleVal){
        const data = newData(titleVal, dueDateVal, descriptionVal)
        createProject(data.title, data.dueDate, data.description)
        
    }
    dialog.close()
});

export function newData(titleVal, dueDateVal, descriptionVal) {
    const data = {
        title: titleVal, 
        dueDate: dueDateVal,
        description: descriptionVal 
    }
    return data
}



