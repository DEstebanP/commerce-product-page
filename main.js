const burguerMenu = document.querySelector(".burguer-menu");
const menuMobile = document.querySelector(".background-navbar-mobile");
const closeMenuMobile = document.querySelector(".close-menu-mobile");
const cartIcon = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-box");

const minusCart = document.getElementById('minus-cart');
const countCart = document.getElementById('cart-count-number');
const plusCart = document.getElementById('plus-cart');
const numberCart = document.querySelector('.number-cart');
const numberCartSpan = document.querySelector('.number-cart span');

const cartBox = document.querySelector('.cart-box');
const addToCartBtn = document.querySelector('.cart-btn');

const productLargeImg = document.querySelectorAll(".product-large-img");
const productThumbs = document.querySelectorAll(".product-images-thumbnails img");

const productsLightbox = document.querySelector(".product-images-lightbox");
const closeLightbox = document.querySelector(".close-lightbox");

//Carousel elements lightbox 
const prevBtnDesk = document.getElementById('prevBtn-desktop');
const nextBtnDesk = document.getElementById('nextBtn-desktop');
const carouselImagesDesk = document.querySelectorAll('.product-lightbox-carousel img')

//Carousel elements
const prevBtn = document.getElementById('prevBtn-mobile');
const nextBtn = document.getElementById('nextBtn-mobile');
const carouselContainer = document.querySelector('.product-images-carousel');
const carouselViewport = document.querySelector(".carousel-viewport");
const carouselImages = document.querySelectorAll('.product-images-carousel img');

burguerMenu.addEventListener('click', toggleMenuMobile);
closeMenuMobile.addEventListener('click', toggleMenuMobile);
cartIcon.addEventListener('click', toggleCartContainer);
minusCart.addEventListener('click', minusCartCount);
plusCart.addEventListener('click', plusCartCount);
addToCartBtn.addEventListener('click', addProductToCart);
productLargeImg[0].addEventListener('click', () => productsLightbox.classList.remove("inactive"));
closeLightbox.addEventListener("click", () => productsLightbox.classList.add("inactive"));

prevBtnDesk.addEventListener("click", prevImgCarousel);
nextBtnDesk.addEventListener("click", nextImgCarousel);
/* const imageWidth = carouselImages[0].clientWidth;
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
});
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
});
function updateCarousel() {
    console.log(currentIndex);
    const offset = currentIndex * imageWidth;
    carouselViewport.scrollLeft = offset;
} */

const imageWidth = carouselImagesDesk[0].clientWidth;
let currentIndex = 0;

function prevImgCarousel() {
    console.log('AAAAAAAAAAAA');
    currentIndex = (currentIndex - 1 + carouselImagesDesk.length) % carouselImagesDesk.length;
    updateCarousel();
};
function nextImgCarousel() {
    currentIndex = (currentIndex + 1) % carouselImagesDesk.length;
    updateCarousel();
};
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImagesDesk[0].parentNode.parentNode.style.transform = `translateX(${offset}%)`
}

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');

    if(!cartContainer.classList.contains('inactive')) {
        cartContainer.classList.add('inactive');
    }
}
function toggleCartContainer() {
    cartContainer.classList.toggle('inactive');
}
function minusCartCount() {
    if(Number(countCart.innerText) !== 1) {
        const newNumber = Number(countCart.innerText) - 1;
        countCart.innerText = newNumber;
    }
}
function plusCartCount() {
    const newNumber = Number(countCart.innerText) + 1;
    countCart.innerText = newNumber;
}

function addProductToCart() {
    // !Delete cart-box text
    cartBox.removeChild(cartBox.children[1]);

    const productPrice = 125.00;

    // layout the cart product
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-in-cart');

    const productImg = document.createElement('img');
    productImg.src = './images/image-product-1-thumbnail.jpg';

    const pText = document.createElement('p');
    pText.innerText = "Fall Limited Edition Sneakers";

    const spanNumber = document.createElement('span');
    spanNumber.innerText = countCart.innerText
    const spanTotalPrice = document.createElement('span');
    spanTotalPrice.classList.add('total-price');
    spanTotalPrice.innerText = "$" + (productPrice * Number(spanNumber.innerText)).toFixed(2);
    const pInfo = document.createElement('p');
    pInfo.appendChild(document.createTextNode("$125.00 x "));
    pInfo.appendChild(spanNumber);
    pInfo.appendChild(document.createTextNode(" "));
    pInfo.appendChild(spanTotalPrice);

    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('delete-icon');
    deleteIcon.src = './images/icon-delete.svg';

    deleteIcon.addEventListener("click", removeProductCart);

    productContainer.append(productImg, pText, pInfo, deleteIcon);
    cartBox.appendChild(productContainer);

    //change cart number
    numberCart.innerText = spanNumber.innerText;
    if (numberCart.classList.contains('inactive')) {numberCart.classList.remove('inactive');}
}

function removeProductCart() {
    while (cartBox.children[1]) {
        cartBox.removeChild(cartBox.children[1]);
    }
    const pCart = document.createElement('p');
    pCart.innerText = "Your cart is empty."

    //Change cart number
    if (!cartBox.children[1] && !numberCart.classList.contains('inactive')) {
        numberCart.classList.add('inactive')
    }
    
    cartBox.children[0].insertAdjacentElement("afterend", pCart);
}

//change image desktop
function thumbnailStyles(element) {
    for (const thumbnail of productThumbs) {
        thumbnail.addEventListener("click", changeProductImage);
        thumbnail.style.opacity = "100%"
        thumbnail.parentNode.style.border = "none"
    }
    if (element) {
        element.style.opacity = "50%";
        element.parentNode.style.border = "3px solid hsl(26, 100%, 55%)";
    }
}
thumbnailStyles("");
productThumbs[0].style.opacity = "50%";
productThumbs[0].parentNode.style.border = "3px solid hsl(26, 100%, 55%)"
function changeProductImage(event) {
    let largeImage;
    if (productsLightbox.classList.contains("inactive")) {
        largeImage = productLargeImg[0]
    } else {
        largeImage= productLargeImg[1]
    }

    if (event.target.classList.contains("1")) {
        largeImage.src = "./images/image-product-1.jpg"
        thumbnailStyles(event.target);
    } else if (event.target.classList.contains("2")) {
        largeImage.src = "./images/image-product-2.jpg"
        thumbnailStyles(event.target);
    } else if (event.target.classList.contains("3")) {
        largeImage.src = "./images/image-product-3.jpg"
        thumbnailStyles(event.target);
    } else if (event.target.classList.contains("4")) {
        largeImage.src = "./images/image-product-4.jpg"
        thumbnailStyles(event.target);
    }
    
}
