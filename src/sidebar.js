export default function toggleNav() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.style.width == "250px") {
        sidebar.style.width = 0;
    } else {
        sidebar.style.width = "250px";
    }
}