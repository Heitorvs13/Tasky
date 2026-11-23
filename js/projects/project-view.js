export function renderProjectsList(projects) {

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
    } else {
        titleEl.textContent = "N/A"
        console.log("Erro ao renderizar projeto: " + project)
    }

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