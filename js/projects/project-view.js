export function renderProjects(projects) {

    const projectsList = document.querySelector(".projects-list")

    projectsList.innerHTML = ""

    projects.forEach(project => {
        projectsList.appendChild(renderProjectOnList(project))
    });

}

export function renderProject(project) {
    const titleEl = document.querySelector("#menu-project-title")

    if (project) {
        titleEl.textContent = project.name
        addEditListener(project)
    } else {
        titleEl.textContent = "N/A"
        console.log("Erro ao renderizar projeto: " + project)
    }

}

export function addCreationListerner() {
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

function renderProjectOnList(project) {
    const projectEl = document.createElement("li")
    projectEl.classList = "project"

    projectEl.innerHTML = `<img src="assets/svg/project.svg" alt="icon" class="project-svg">
                    <h2 class="project-name">${project.name}</h2>`

    return projectEl
}

function updateEditionModal(element, project){
    element.querySelector("#project-title").value = project.name
}