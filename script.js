const hamburger = document.querySelector(".hamburger-menu");

const sidebar = document.querySelector(".side-bar");

const yearOutput = document.querySelector("#yearOutput");

// fetch the date object
const nowDate = new Date();
// fet the currentYear from nowDate 
yearOutput.textContent = nowDate.getFullYear() + ",";

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("change-hamburger");
    sidebar.classList.toggle ("change-sidebar");
});

