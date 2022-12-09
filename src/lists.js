import Todo from "./todos";

export default function List(name) {
    this.name = name;
    this.todos = [];
}

export function createList(list) {
    const modal = document.querySelector(".modal");
    const todoModal = document.querySelector(".todo-modal");

    const titleInp = document.querySelector("#title");
    const dateInp = document.querySelector("#date");
    const priorityInp = document.querySelector("#priority");

    const create = document.querySelector("#create");
    create.onsubmit = () => {
        list.todos.push(new Todo(titleInp.value, dateInp.value, priorityInp.value));

        return false;
    }

    const cancel = document.querySelector("#cancel");
    cancel.onclick = () => {
        modal.classList.add("hidden");
        todoModal.classList.add("hidden");
    }

    const listBox = document.createElement("div");
    listBox.classList.add("list-box");
    listBox.setAttribute("data-name", list.name);

    const listName = document.createElement("h1");
    listName.classList.add("list-name");
    listName.innerHTML = list.name;
    listBox.appendChild(listName);

    const mainAdd = document.createElement("div");
    mainAdd.classList.add("todo-box");
    mainAdd.classList.add("todo-add");
    mainAdd.innerHTML = "Add new todo +";
    mainAdd.onclick = () => {
        modal.classList.remove("hidden");
        todoModal.classList.remove("hidden");
    }
    listBox.appendChild(mainAdd);

    return listBox;
}