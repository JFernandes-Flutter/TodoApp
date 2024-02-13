// Add event listener for add/submit button

// document.querySelector("#inputButton")
//         .addEventListener('click', () => {
    
//     const inputToDoElement = document.querySelector("#inputToDo")
//     console.log(inputToDoElement.value)
    
// });

const todos = [];

function addToDo() {
    const inputToDoElement = document.querySelector("#inputToDo")
    const title = inputToDoElement.value

    todos.push({title, completed: false});

    renderTodos()


}

// delete todo

function deleteToDo(index) {
    console.log(todos)
    todos.splice(index, 1)
    renderTodos()
}

function toggleToDo(index) {
    todos[index].completed = !todos[index].completed
    renderTodos()
}

function renderTodos() {
    const toDoListElement = document.querySelector("#to-do-list")

    toDoListElement.innerHTML = ""
    todos.forEach((todo, index) => {
        const listElement = document.createElement("li")
        listElement.innerHTML = `<p>${todo.title}</p>
        <p>${todo.completed ? "Completed" : "Pending"}</p>
        <button onclick="toggleToDo(${index})">Toggle</button>
        <button onclick="deleteToDo(${index})">Delete</button>`

        toDoListElement.appendChild(listElement)
    })
}
