let count = 0
export default function makeTask(currentProjectTitle, currentProjectBox) {
   const taskBox = document.createElement("div")
   const todo = document.createElement("input")
   taskBox.classList = "taskBox"
   taskBox.setAttribute('id', currentProjectTitle)
   todo.setAttribute('id', count += 1)
   taskBox.appendChild(todo)
   currentProjectBox.appendChild(taskBox)
   const key = `tasksFor_${currentProjectTitle}_#_${count}`
   todo.addEventListener('blur', () => {
      localStorage.setItem(key, todo.value)
   })
} 
   

