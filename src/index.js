import toggleNav from './sidebar';

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

const edit = document.querySelector(".edit");
const change = document.querySelector(".change");

// edit.onclick = () => {
//     change.disabled = false;
//     change.focus();
// }

// change.onblur = () => {
//     change.disabled = true;
// }
// change.onkeypress = (e) => {
//     if (e.key === "Enter") change.disabled = true;
// }

const newProject = document.querySelector(".add");
newProject.onclick = () => {
    const project = document.createElement("button");

    const priority = document.createElement("span");
    priority.classList.add("dot");
    priority.classList.add("low");

    const text = document.createElement("input");
    text.setAttribute("type", "text");
    text.classList.add("change");
    text.onblur = () => {
        text.disabled = true;
    }
    text.onkeypress = (e) => {
        if (e.key === "Enter") text.disabled = true;
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
}
