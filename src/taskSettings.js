const projectList = document.querySelectorAll('.projectBox')

export default function deleteTask() {
    for(let i = 0; i < projectList.length; i++) {
        const tasks = projectList[i].querySelectorAll('.taskBox')
        for(let j = 0; j < tasks.length; j++) {
            
            
            tasks[j].appendChild(delbutton)
            

        }
        
    }
}
