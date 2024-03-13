export default function makeTask(currentProject) {
   
   if (currentProject) {
      const taskBox = document.createElement("div")
      taskBox.classList = "taskBox"
      const todo = document.createElement("input")
      taskBox.appendChild(todo)
      const settingfunc = settings()
      settingfunc.delbutton()
      function settings() {
         function delbutton() {
            const delbutton = document.createElement('button')
            delbutton.textContent = "Delete"
            currentProject.appendChild(taskBox)
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

