import toggleNav from './sidebar';

const body = document.querySelector("body");

// Sidebar DOM

document.querySelector(".sidebar-btn").onclick = toggleNav;

const dropdownBtn = document.querySelector(".projects");
const dropdownIco = document.querySelector(".arrow");
const dropdown = document.querySelector(".dropdown-container");
dropdownBtn.onclick = () => {
    dropdownIco.classList.toggle("up");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
}

// Sidebar - Projects 

let nonProjects = document.querySelectorAll(".sidebar > button");
let projectArr = document.querySelectorAll(".todo-container");

const today = document.querySelector(".today");

nonProjects.forEach(el => {
    el.onclick = () => {
        projectArr = document.querySelectorAll(".todo-container");
        projectArr.forEach(pr => pr.style.display = "none");
        today.style.display = "flex";
    }
})

const edit = document.querySelector(".edit");
const change = document.querySelector(".change");

const newProject = document.querySelector(".add");
newProject.onclick = () => {
    const projectContainer = document.createElement("div");
    projectContainer.classList.add("todo-container");
    projectContainer.style.display = "none";

    body.appendChild(projectContainer);

    const project = document.createElement("button");

    const priority = document.createElement("span");
    priority.classList.add("dot");
    priority.classList.add("low");

    const text = document.createElement("input");
    text.setAttribute("type", "text");
    text.classList.add("change");
    text.onblur = () => {
        if (text.value == 0) {
            dropdown.removeChild(project);
            body.removeChild(projectContainer);
        }
        projectArr = document.querySelectorAll(".todo-container");
        projectContainer.classList.add(text.value);
        text.disabled = true;
    }
    text.onkeypress = (e) => {
        if (e.key === "Enter") {
            text.disabled = true;
            projectContainer.classList.add(text.value);
        }
    }
    
    const editBtn = document.createElement("i");
    editBtn.classList.add("fa");
    editBtn.classList.add("fa-pencil");
    editBtn.classList.add("edit");
    editBtn.onclick = () => {
        text.disabled = false;
        text.focus();
    }

    project.appendChild(priority);
    project.appendChild(text);
    project.appendChild(editBtn);

    dropdown.appendChild(project);

    text.focus();

    project.onclick = () => {
        todoCont = projectContainer;
        projectArr = document.querySelectorAll(".todo-container");
        projectArr.forEach(element => {
            element.style.display = "none";
        });
        projectContainer.style.display = "flex";
    }
}

// TODOS DOM

let todoCont = document.querySelector(".today");
const todoAdd = document.querySelector(".add-todo");

todoAdd.onclick = () => {
    const newTodo = document.createElement("div");

    const todoCheck = document.createElement("input");
    todoCheck.setAttribute("type", "checkbox");
    todoCheck.setAttribute("name", "switch");
    todoCheck.classList.add("check");
    
    const todoInp = document.createElement("input");
    todoInp.setAttribute("type", "text");
    todoInp.classList.add("todo-text");

    const todoEdit = document.createElement("i");
    todoEdit.classList.add("fa");
    todoEdit.classList.add("fa-pencil");
    todoEdit.classList.add("todo-ico");

    const todoDel = document.createElement("i");
    todoDel.classList.add("fa");
    todoDel.classList.add("fa-trash");
    todoDel.classList.add("todo-ico");

    todoInp.onblur = () => {
        if (todoInp.value == 0) todoCont.removeChild(newTodo);
        todoInp.disabled = true;
    }
    todoInp.onkeypress = (e) => {
        if (e.key === "Enter") todoInp.disabled = true;
    }
    todoEdit.onclick = () => {
        todoInp.disabled = false;
        todoInp.focus();
    }
    todoDel.onclick = () => {
        todoCont.removeChild(newTodo);
    }

    newTodo.appendChild(todoCheck);
    newTodo.appendChild(todoInp);
    newTodo.appendChild(todoEdit);
    newTodo.appendChild(todoDel);

    todoCont.appendChild(newTodo);

    todoInp.focus();
}
