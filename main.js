const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
/*
por si deseo que se llame a la funcion, en lugar de cuando ocurra el evento click, se haga cuando el mouse pase por encima de los componentes
menuEmail.addEventListener("mouseenter", toggleDesktopMenu);
desktopMenu.addEventListener("mouseleave", toggleDesktopMenu);
*/

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    console.log("Di click");
    mobileMenu.classList.toggle("inactive");
}