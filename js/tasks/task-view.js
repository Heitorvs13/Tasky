export function AddListeners(){

    const crationBtn = document.getElementById("create-task")
    const editBtn = document.querySelectorAll("#task")

    /**
     * Task Creation
    */
    crationBtn.addEventListener("click", (event) =>{
        event.preventDefault
        renderTaskCreation()
    })
}

function renderTaskCreation(){
    const creationModal = document.querySelector("#task-creation")
    addCloseEvent(creationModal)
    creationModal.showModal()
}

function addCloseEvent(modal){
    const closeBtn = modal.querySelector(".close")
    closeBtn.addEventListener("click", (event) => {
        event.preventDefault
        modal.close()
    })

}