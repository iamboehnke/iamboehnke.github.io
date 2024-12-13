// script.js
function toggleMenu() {
    console.log("Hamburger clicked!"); 
    const navList = document.querySelector('.nav__list');
    navList.classList.toggle('active');
}