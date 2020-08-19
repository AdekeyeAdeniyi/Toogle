// app.js

const toggle = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");
const bar = document.querySelector(".icon-bars");

toggle.addEventListener("click", ()=>{
    

    bar.classList.toggle("icon-close");
    bar.classList.toggle("icon-bars");

    menu.classList.toggle("show");
    menu.firstElementChild.classList.toggle("visible");

})



