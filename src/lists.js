export default function List(name) {
    this.name = name;
    this.todos = [];
}

export function createList(list) {
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
    listBox.appendChild(mainAdd);

    return listBox;
}