const hamburger = document.querySelector(".hamburger-menu");

const sidebar = document.querySelector(".side-bar");


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("change-hamburger");
    sidebar.classList.toggle ("change-sidebar");
});