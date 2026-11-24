let timer

export function setup(tasks, updateFunction){
    const searchField = document.querySelector("#task-search")

    searchField.addEventListener("input", (event) => {
        const term = event.target.value

        clearTimeout(timer)

        timer = setTimeout(() =>{
            updateFunction(filter(tasks, term))
        }, 400)
    })


}

function filter(tasks, term){
    return tasks.filter(task => 
        task.title.toLowerCase().includes(term.toLowerCase())
    )
}