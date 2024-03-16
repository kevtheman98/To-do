export default function makeTask(currentProjectTitle, currentProjectBox) {
   let count = 0
   if (currentProjectTitle) {
      const taskBox = document.createElement("div")
      taskBox.classList = "taskBox"
      taskBox.setAttribute('id', currentProjectTitle)
      const todo = document.createElement("input")
      taskBox.appendChild(todo)
      const key = `tasksFor_${currentProjectTitle}_#_${count += 1}`
      todo.addEventListener('blur', () => {
         localStorage.setItem(key, todo.value)

      })
      
      const settingfunc = settings()
      settingfunc.delbutton()
      function settings() {
         function delbutton() {
            const delbutton = document.createElement('button')
            delbutton.textContent = "Delete"
            currentProjectBox.appendChild(taskBox)
            taskBox.appendChild(delbutton)

            delbutton.addEventListener('click', () => {
               taskBox.remove()
            })
         }


         return { delbutton }
      }
      
   } else {
      console.log("This is teh fisrt one")
   }

}

