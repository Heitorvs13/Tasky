export function AddListeners(){

    const crationBtn = document.getElementById("create-task")
    const editBtn = document.querySelectorAll(".task")

    /**
     * Task Creation
    */
    crationBtn.addEventListener("click", (event) =>{
        event.preventDefault
        renderTaskCreation()
    })

    editBtn.forEach((element) =>{
        element.addEventListener("click", (event) => {
            event.preventDefault

            // Mock de API
            const task = {
                title: "Retornar clientes",
                description: "Retornar os clientes com as informações sobre o desenvolvimento da plataforma",
                responsible: "Heitor Vieira",
                schedule: "2026-11-15",
                priority: "high"
            }
            renderTaskEdition(task)
        })
    })
}

function renderTaskCreation(){
    const creationModal = document.querySelector("#task-creation")
    addCloseEvent(creationModal)
    creationModal.showModal()
}

function renderTaskEdition(task){
    const editionModal = document.querySelector("#task-edition")
    updateTaskEdition(editionModal, task)
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

function updateTaskEdition(element, task){
    element.querySelector("#title").innerText = task.title
    element.querySelector("#task-title").value = task.title
    element.querySelector("#task-description").value = task.description
    element.querySelector("#task-responsible").value = task.responsible
    element.querySelector("#task-schedule").value = task.schedule
    element.querySelector(`#${task.priority}`).checked = true
}