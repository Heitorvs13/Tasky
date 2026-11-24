import * as project from "./projects/project-core.js"
import * as task from "./tasks/task-core.js"
import * as search from "./utils/taskSearch.js"

const tasks = [{
    title: "Estruturar a página",
    description: "Implementar a estrutura da página do projeto utilizando HTML semântico e respeitando as regras de acessibilidade",
    status: "Doing",
    schedule: "28/10/2026",
    responsible: "Heitor",
    priority: "High",
    id: "1",
    projectId: "1"
}]

const projects = [{
    id: "1",
    name: "Tasky"
},{
    id: 2,
    name: "Implementação da API"
},{
    id: 3,
    name: "Interação com o usuário"
}]

project.setup(projects)
task.setup(tasks)

search.setup(tasks, task.update)
