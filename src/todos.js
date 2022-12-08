export default function Todo(title, dueDate, priority) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = false;
}

export function createTodo(todo) {
    const todoBox = document.createElement("div");
    todoBox.classList.add("todo-box");
    todoBox.classList.add(todo.priority);

    todoBox.innerHTML = todo.title;

    return todoBox;
}