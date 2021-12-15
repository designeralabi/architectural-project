const hamburger = document.querySelector(".hamburger-menu");

const sidebar = document.querySelector(".side-bar");


hamburger.addEventListener("click", ()=>{
    
    sidebar.classList.toggle ("change-sidebar");
});