const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
/*
por si deseo que se llame a la funcion, en lugar de cuando ocurra el evento click, se haga cuando el mouse pase por encima de los componentes
menuEmail.addEventListener("mouseenter", toggleDesktopMenu);
desktopMenu.addEventListener("mouseleave", toggleDesktopMenu);
*/

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}