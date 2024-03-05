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
        const box = document.createElement('div')
        box.classList = "box"
        const newTitle = document.createElement('input')
        newTitle.value = title.value
        const newdueDate = document.createElement('div')
        newdueDate.textContent = duedate.value
        const newDescription = document.createElement('div')
        newDescription.textContent = description.value
        container.appendChild(box)
        box.appendChild(newTitle)
        box.appendChild(newdueDate)
        box.appendChild(newDescription)

        
    })
   
    
}

