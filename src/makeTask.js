export default function addTask(currentProject) {
   if (currentProject) {
      const taskBox = document.createElement("div")
      taskBox.classList = "taskBox"
      const todo = document.createElement("input")
      currentProject.appendChild(taskBox)
      taskBox.appendChild(todo)
   } else {
      console.log("This is teh fisrt one")
   }

}