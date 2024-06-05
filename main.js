const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartAside);
/*
por si deseo que se llame a la funcion, en lugar de cuando ocurra el evento click, se haga cuando el mouse pase por encima de los componentes
menuEmail.addEventListener("mouseenter", toggleDesktopMenu);
desktopMenu.addEventListener("mouseleave", toggleDesktopMenu);
*/

function toggleDesktopMenu(){
    const isAsideMenuClosed = aside.classList.contains("inactive");

    if(!isAsideMenuClosed) {
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideMenuClosed = aside.classList.contains("inactive");

    if(!isAsideMenuClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}