const hamburger = document.querySelector(".hamburger-menu");

const sidebar = document.querySelector(".side-bar");


hamburger.addEventListener("click", ()=>{
    console.log("you clicked me");

    sidebar.classList.toggle ("change-sidebar");
});