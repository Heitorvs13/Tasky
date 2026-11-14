import * as taskView from "./tasks/task-view.js"

const tasks = [{
    title: "Estruturar a página",
    description: "Implementar a estrutura da página do projeto utilizando HTML semântico e respeitando as regras de acessibilidade",
    status: "Doing",
    schedule: 1793232000,
    responsible: "Heitor",
    priority: "High",
    id: "1",
    projectId: "1"
}]


taskView.addCreationListerner()

taskView.renderTasks(tasks)