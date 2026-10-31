# O aplicativo: Tasky

O aplicativo será um gestor de tarefas, segmentadas por projetos. 

Projetos e tarefas serão cadastrados, editados e excluídos pelo usuário, e persistidos em uma API hospedada no [MockAPI.io](https://mockapi.io).

## Modelos:

Dentro do aplicativo existem apenas dois modelos de dados: **Projetos** e **Tarefas**.

### Projeto:

| Atributo | Tipo |
| -------- | ---- |
| id | Number |
| name | String |

Exemplo:

```json
{
    "id": 1,
    "name": "Tasky"
}
```

### Tarefa:

| Atributo | Tipo |
| -------- | ---- |
| id | Number |
| projectId | Number |
| title | String |
| description | String |
| status | String [`Pending`, `Doing`, `Done`] |
| schedule | Date |
| responsible | String |
| priority | String [`Low`, `Medium`, `High`] |

Exemplo:

```json
{
    "title": "Estruturar a página",
    "description": "Implementar a estrutura da página do projeto utilizando HTML semântico e respeitando as regras de acessibilidade",
    "status": "Doing",
    "schedule": 1793232000,
    "responsible": "Heitor",
    "priority": "High",
    "id": "1",
    "projectId": "1"
}
```

## API:

A API utilizada para simular o backend está hospedada em: `https://6adfdcc38e42963c8d5e717d.mockapi.io/tasky/`

Dentro dela existem dois endpoints:

* `/projects`: para acessar os recursos dos projetos, no seguinte modelo:

    ```json
    [
        {
            "id": 1
            "title": "Tasky"
        },
        ...
    ]
    ```

* `/tasks`: para acessar os recursos das tarefas, no seguinte modelo:

    ```json
    [
        {
            "title": "Estruturar a página",
            "description": "Implementar a estrutura da página do projeto utilizando HTML semântico e respeitando as regras de acessibilidade",
            "status": "Doing",
            "schedule": 1793232000,
            "responsible": "Heitor",
            "priority": "High",
            "id": "1",
            "projectId": "1"
        },
        {
            "title": "Estilizar a página",
            "description": "Implementar a estilização da página seguindo o projeto no Figma, aplicando os conceitos de responsividade",
            "status": "Pending",
            "schedule": 1793404800,
            "responsible": "Eduarda",
            "priority": "High",
            "id": "2",
            "projectId": "1"
        },
        ...
    ]
    ```

Cada endpoint disponibiliza os seguintes recursos:

* `GET /endpoint`: Retorna todos os objetos;

* `GET /endpoint/id=<id-objeto>`: Retorna o objeto especificado pelo id;

* `POST /endpoint`: Adiciona um objeto especificado no corpo da requisição;

* `PUT /endpoint/id=<id-objeto>`: Atualiza o objeto especificado pelo id;

* `DELETE /endpoint/id=<id-objeto>`: Exclui o objeto especificado pelo id.