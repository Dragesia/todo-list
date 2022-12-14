import toggleNav from './sidebar';

document.querySelector(".sidebar-btn").onclick = toggleNav;

const dropdownBtn = document.querySelector(".projects");
const dropdown = document.querySelector(".dropdown-container");
dropdownBtn.onclick = () => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
}