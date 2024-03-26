import { createProject } from "./projects";
const dialog = document.querySelector('dialog')
const confirm = document.querySelector("#confirmBtn")
let titleVal;
let dueDateVal;
let descriptionVal;
const addProjectBtn = document.querySelector(".addProject")

addProjectBtn.addEventListener("click", () => {
    dialog.showModal();
    confirm.addEventListener("click", function(event) {
        event.preventDefault(); 
        titleVal = document.querySelector("#title").value;
        dueDateVal = document.querySelector("#duedate").value
        descriptionVal = document.querySelector("#description").value
        

        dialog.close()
    });
})

export function newData() {
    return {
        title: titleVal, 
        dueDate: dueDateVal,
        description: descriptionVal}
}

if(newData) {
    createProject()
}

