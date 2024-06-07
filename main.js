const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-window-close")
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector(".product-detail-window")


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartAside);
productDetailCloseIcon.addEventListener("click", closeProductWindowAside)

function toggleDesktopMenu(){
    const isAsideMenuClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDetalClosed = productDetailContainer.classList.contains("inactive");

    if(!isAsideMenuClosed) {
        shoppingCartContainer.classList.add("inactive");
    } else if (!isProductDetalClosed) {
        productDetailContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideMenuClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDetalClosed = productDetailContainer.classList.contains("inactive");

    if(!isAsideMenuClosed) {
        shoppingCartContainer.classList.add("inactive");
    } else if (!isProductDetalClosed) {
        productDetailContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetalClosed = productDetailContainer.classList.contains("inactive");

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    } else if (!isProductDetalClosed) {
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductWindowAside() {
    shoppingCartContainer.classList.add("inactive")
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductWindowAside() {
    productDetailContainer.classList.add("inactive");
}


//Renderizar los productos
const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});
productList.push({
    name: "Cc Cream",
    price: 200000,
    image: "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});
productList.push({
    name: "Base Larga Duracion",
    price: 200000,
    image: "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});
productList.push({
    name: "Polvo Compacto",
    price: 150000,
    image: "https://images.pexels.com/photos/255934/pexels-photo-255934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
});
productList.push({
    name: "Mascarilla Repolarizadora",
    price: 75000,
    image: "https://luegopagocdn.azureedge.net/temporary/119593-en-us-1800px-01%20(2).jpg"
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductWindowAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);