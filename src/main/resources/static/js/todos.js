const todos = document.querySelector('#todos');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    postTodo();
});
async function list() {
    todos.innerHTML = "";
    let res = await fetch("/api/todos");
    let todos_ = await res.json();
    todos_.forEach((todo) => {
        addTodoIntoHtml(todo);
    })
}

function addTodoIntoHtml(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.content;
    }
    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && (todo.done == true)) {
            todoEl.classList.add("completed");
        }
        todoEl.innerText = todoText;
        todoEl.addEventListener("click", (event) => {
            todoEl.classList.toggle("completed");
            toggleCompleted(todo);
        });
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
            removeTodo(todo.id);
        });
        todos.appendChild(todoEl);
        input.value = "";
        // updateToServer();
    }
}

function updateToServer() {
    const todosEl = document.querySelectorAll("li");
    const todos = [];
    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });
}

async function postTodo() {
    let res = await fetch("/api/todos", {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify({
            content : input.value,
            done : false,
        })
    });
    let todo = await res.json();
    let ok = await list(todo);
    // addTodoIntoHtml(todo);
    // if (todo != null) {
    //
    // }
}

async function toggleCompleted(todo) {
    let res = await fetch(`/api/todos/${todo.id}`, {
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify({
            id : todo.id,
            content : todo.content,
            done : !todo.done,
        })
    });
}

async function removeTodo(id) {
    let res = await fetch(`/api/todos/${id}`, {
        method : "DELETE"
    });
}

list();