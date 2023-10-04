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
    if(Number(countCart.innerText) !== 0) {
        const newNumber = Number(countCart.innerText) - 1;
        countCart.innerText = newNumber;
    }
}
function plusCartCount() {
    const newNumber = Number(countCart.innerText) + 1;
    countCart.innerText = newNumber;
}