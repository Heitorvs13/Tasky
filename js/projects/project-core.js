import * as view from "./project-view.js"

export function setup(projects){

    const creationModal = document.querySelector("#project-creation")

    const editionModal = document.querySelector("#project-edition")

    addCloseEvent(creationModal)
    addCloseEvent(editionModal)
    
    addCreationListerner()

    view.renderProjectsList(projects)

    view.renderProject(projects[0])
}

export function update(){
    const projects = network.getProjects()

    view.renderProjectsList(projects)
}

function addCreationListerner() {
    const creationBtn = document.querySelector(".new-project")

    creationBtn.addEventListener("click", event => {
        event.preventDefault

        const creationModal = document.querySelector(".project-creation-modal")

        addCloseEvent(creationModal)

        creationModal.showModal()
    })
}

function addEditListener(project) {
    const editBtn = document.querySelector(".header-menu")

    editBtn.addEventListener("click", event => {
        const editModal = document.querySelector(".project-edition-modal")

        updateEditionModal(editModal, project)

        addCloseEvent(editModal)

        editModal.showModal()
    })
}

function addCloseEvent(modal) {
    const closeBtn = modal.querySelector(".close")

    closeBtn.addEventListener("click", event => {
        event.preventDefault
        modal.close()
    })
}