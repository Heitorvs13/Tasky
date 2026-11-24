import * as view from "./task-view.js"

//Usada no app.js para iniciar a página com a renderização e os listeners 
export function setup(tasks){
    view.addCreationListerner()
    update(tasks)
}

//Usada como evento na renderização das tarefas
export function save(task){
    network.save(task)
    update(task.projectId)
}

//Usada como evento na renderização das tarefas
export function edit(task){
    network.edit(task.id, task)
    update(task.projectId)
}

//Usada como evento na renderização das tarefas
export function remove(task){
    network.remove(task.id)
    update(task.projectId)
}


export function update(tasks){
    //const tasks = network.getById(projectId)
    view.renderTasks(tasks)
}