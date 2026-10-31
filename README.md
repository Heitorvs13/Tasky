# Trabalho Final: Desenvolvimento de uma Aplicação Web Interativa com API REST

O projeto será desenvolvido em grupos

**Prazo de Entrega:** até a data prevista no Cronograma: 30/11/2026

Apresentação: na semana da entrega, apresentações realizadas pelo grupo para toda a turma


## Objetivo Principal:

Este trabalho tem como objetivo consolidar os conhecimentos adquiridos na disciplina, com foco na criação de uma interface web dinâmica e responsiva.

O desafio central é desenvolver uma aplicação web usando HTML (tags semânticos!), CSS e JavaScript (pode-se empregar Bootstrap e jQuery) onde a interação do usuário produza alterações na página sem recarregamentos dela (page reloads).

Para isso, os grupos deverão consumir e manipular dados de um back-end simulado, realizando requisições HTTP assíncronas com JavaScript, preferencialmente por meio da Fetch API, para se comunicar com endpoints no padrão REST

## Temas Sugeridos:

* **Mini E-Commerce** (Catálogo e Carrinho):

    Descrição: Uma vitrine de produtos onde o usuário pode navegar, ver detalhes e adicionar/remover/atualizar itens em um carrinho de compras.

    Recursos Sugeridos (2):  /produtos (Lista estática de produtos) ; /cart (Itens que o usuário adicionou - foco do POST, PUT, DELETE)

* **Painel Kanban** (Estilo Trello Simplificado):

    Descrição: Um painel visual com colunas (Ex: "A Fazer", "Fazendo", "Feito"). O usuário pode criar, editar, excluir e mover "cartões" (tarefas) entre as colunas.

    Recurso Sugerido (1): /tarefas (O "status" da tarefa, ex: "Fazendo", seria uma propriedade do objeto "tarefa" a ser atualizada via PUT).

* **Microblog / Mural de Recados**:

    Descrição: Uma interface simples (como um Twitter) com um formulário para enviar novas postagens e um "feed" que exibe todas as postagens (criadas via POST) e permite excluí-las (DELETE).

    Recurso Sugerido (1): /posts (Contendo usuario, mensagem, dataHora).

* **Sistema de Agendamento** (de Salas ou Serviços):

    Descrição: Uma interface para criar, visualizar, editar e cancelar agendamentos.

    Recurso Sugerido (1): /agendamentos (contendo nome, data, hora, serviço, etc.)

* **Painel de Gerenciamento de Usuários** (Admin):

    Descrição: Uma tabela de usuários onde um "admin" pode adicionar, editar e remover usuários.

    Recurso Sugerido (1): /users (contendo nome, email, cargo, etc.)

* **Aplicativo de Enquetes** (Votação):

    Descrição: Exibir enquetes e permitir que o usuário vote. O foco é usar PUT para atualizar os contadores de votos.

    Recurso Sugerido (1): /enquetes (contendo pergunta, array de opções, array de votos)

* **Gerenciador de Tarefas com Projetos** (Pai/Filho):

    Descrição: Uma lista de "Projetos" que, ao serem clicados, filtram e exibem uma lista de "Tarefas" associadas.

    Recursos Sugeridos (2): /projetos e /tarefas (onde a tarefa tem um projetoId).


Sugestão extra usando uma api pública!

* **Painel de Mídia** (Híbrido: API Pública + MockAPI)

    Descrição: Uma aplicação que consome uma API pública (como a TMDb para filmes) para busca. O usuário pode "favoritar" itens, e esses favoritos são salvos na sua API Mock.

    Recurso Sugerido (1):    /favoritos (Usado para POST e DELETE, salvando o ID do filme/item).



> Tema Próprio? 
>
> Grupos que desejarem propor um tema diferente devem validá-lo com o professor na primeira semana, garantindo que o escopo e os requisitos técnicos sejam equivalentes.

## Requisitos Técnicos Obrigatórios

A aplicação desenvolvida deve incluir:

**HTML:** Estrutura semântica e bem organizada

**CSS e UI Framework:** Estilizado com CSS puro ou uso de Bootstrap para agilizar o desenvolvimento de interfaces responsivas e componentes

**Responsividade:** a aplicação deverá apresentar comportamento adequado pelo menos em telas de desktop e dispositivos móveis

**JavaScript (Puro ou jQuery)**:

* Manipulação dinâmica do DOM (ex: adicionar, remover e editar elementos na tela);

* Validação de formulários no lado do cliente (client-side);

* **Comunicação Assíncrona:** A comunicação com a API deverá ser realizada preferencialmente com a Fetch API. O uso de $.ajax() poderá ser aceito caso jQuery tenha sido utilizado em outras partes do projeto;

* Implementação correta dos verbos HTTP no estilo REST:

    * `GET`: para buscar e exibir listas de dados ou dados únicos;

    * `POST`: para criar novos dados (ex: salvar um novo agendamento);

    * `PUT`: para atualizar/substituir um recurso existente (ex: atualizar os dados de um usuário existente);

    * `PATCH:` para atualizar parcialmente um recurso (ex: marcar uma tarefa como concluída);

    * `DELETE`: Para remover dados (ex: cancelar um agendamento).

        > Recursos escolhidos para o CRUD devem permitir demonstrar claramente GET, POST, PUT/PATCH e DELETE

* **Back-end Simulado:** use um serviço para simular o back-end mantendo-se dentro dos limites para uso de um plano gratuito (implementação do back-end não é um requisito deste trabalho). Poderá ser utilizado o [MockAPI.io](https://mockapi.io) ou outro serviço equivalente aprovado pelo professor;

* **Tratamento dos estados da comunicação:** a interface deverá fornecer feedback adequado durante operações assíncronas e em situações de erro. As chamadas realizadas com fetch() deverão verificar o status da resposta, utilizando, por exemplo, response.ok, e tratar falhas de comunicação de forma adequada;

* **Qualidade do código:** o código JavaScript deve ser organizado em funções com responsabilidades bem definidas, utilizar nomes claros para variáveis e funções, evitar duplicação desnecessária e manter separação adequada entre estrutura (HTML), apresentação (CSS) e comportamento (JavaScript);

* **Acessibilidade:** a aplicação deverá adotar práticas básicas de acessibilidade, incluindo uso de HTML semântico, associação correta entre label e campos de formulário, textos alternativos para imagens relevantes, contraste adequado e navegação utilizável por teclado.

## Apresentação (até 10 minutos):

O grupo deverá:

1. Apresentar o objetivo do projeto escolhido e principais funcionalidades (powerpoint com até 4 slides);

2. Demonstrar a aplicação, executando todas as funcionalidades (Criar, Ler, Atualizar, Excluir);

3. Mostrar e explicar os trechos de código mais relevantes (especialmente as requisições assíncronas e manipulação do DOM);

4. Mostrar, no DevTools/Network ou no código, pelo menos uma requisição HTTP e identificar método, URL e status retornado.

## Entregas (na data prevista):

1. Slides utilizados na apresentação
2. Upload, nesta tarefa, da pasta do projeto zipada


## Critérios de Avaliação

| Critério | Peso |
| -------- | ---- |
| Funcionalidades e CRUD | 3,0 |
| Comunicação com API / HTTP / Fetch | 2,0 |
| JavaScript e manipulação do DOM | 1,5 |
| HTML, CSS e responsividade | 1,5 |
| Organização e qualidade do código | 1,0 |
| Apresentação e demonstração | 1,0 |
| **Total** | 10,0 |

