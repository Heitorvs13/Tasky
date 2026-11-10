export function renderTasks(tasks){

    addCreationListerner()

    const pendingList = document.querySelector(".pending-list")
    const doingList = document.querySelector(".doing-list")
    const doneList = document.querySelector(".done-list")

    tasks.forEach((task) =>{
        switch(task.status){
            case "pending":
                pendingList.appendChild(renderTask(task))
            case "doing":
                doingList.appendChild(renderTask(task))
            case "done":
                doneList.appendChild(renderTask(task))
        }
    })
}

export function addCreationListerner(){
    const crationBtn = document.getElementById("create-task")

    crationBtn.addEventListener("click", (event) =>{
        event.preventDefault
        renderCreationModal()
    })
}

function renderTask(task){
    const taskEl = document.createElement("article")

    let priorityTitle

    switch(task.priority){
        case "low":
            priorityTitle = "Prioridade Baixa"
        case "medium":
            priorityTitle = "Prioridade Média"
        case "high":
            priorityTitle = "Prioridade Alta"
    }

    taskEl.innerHTML = `<h3 class="task-title">${task.title}</h3>
                        <hr>
                        <p class="task-description">${task.description}</p>
                        <p class="task-responsible">Responsável: ${task.responsible}</p>
                        <p class="task-schedule">Expira em: <time datetime="${task.schedule}">${task.schedule}</time></p>
                        <div class="task-priority">
                            <svg class="priority-icon" priority="${task.priority}" height="50" width="50">
                                <circle cx="25" cy="25" r="25" />
                            </svg>
                            <p class="priority-title">${priorityTitle}/p>
                        </div>`

    taskEl.addEventListener("click", (event) => {
        event.preventDefault
        renderEditionModal(task)
    })

    return taskEl
}

function renderCreationModal(){
    const creationModal = document.querySelector("#task-creation")
    addCloseEvent(creationModal)
    creationModal.showModal()
}

function renderEditionModal(task){
    const editionModal = document.querySelector("#task-edition")
    updateEditionModal(editionModal, task)
    addCloseEvent(editionModal)
    editionModal.showModal()
}

function addCloseEvent(modal){
    const closeBtn = modal.querySelector(".close")
    closeBtn.addEventListener("click", (event) => {
        event.preventDefault
        modal.close()
    })
}

function updateEditionModal(element, task){
    element.querySelector("#title").innerText = task.title
    element.querySelector("#task-title").value = task.title
    element.querySelector("#task-description").value = task.description
    element.querySelector("#task-responsible").value = task.responsible
    element.querySelector("#task-schedule").value = task.schedule
    element.querySelector(`#${task.priority}`).checked = true
}