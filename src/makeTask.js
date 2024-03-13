export default function addTask(currentProject) {
   if (currentProject) {
      const taskBox = document.createElement("div")
      taskBox.classList = "taskBox"
      const todo = document.createElement("input")
      const delbutton = document.createElement('button')
      delbutton.textContent = "Delete"
      currentProject.appendChild(taskBox)
      taskBox.appendChild(todo)
      taskBox.appendChild(delbutton)
   } else {
      console.log("This is teh fisrt one")
   }

}