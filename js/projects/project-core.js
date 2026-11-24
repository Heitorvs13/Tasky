import * as view from "./project-view.js"

export function setup(projects){

    const creationModal = document.querySelector("#project-creation")

    const editionModal = document.querySelector("#project-edition")

    view.addCloseEvent(creationModal)
    view.addCloseEvent(editionModal)
    
    view.addCreationListerner()

    view.renderProjectsList(projects)

    view.renderProject(projects[0])

    view.addEditListener(projects[0])
}

export function update(){
    const projects = network.getProjects()

    view.renderProjectsList(projects)
}

