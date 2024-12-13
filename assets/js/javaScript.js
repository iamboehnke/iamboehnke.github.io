document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.nav__hamburger');
    const navList = document.querySelector('.nav__list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', function () {
            console.log("Hamburger clicked!");
            navList.classList.toggle('active');  
        });
    } else {
        console.log("Could not find elements");
    }
});
